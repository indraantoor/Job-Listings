import { Router } from 'express';
import UserApplication from '../models/UserApplication.js';
import mongoose from 'mongoose';
import { MockConfig } from '../mock/mocks.config.js';

const router = Router();

// a randomly generated user id to simulate a real user
const userId = MockConfig.user;

/**
 * @swagger
 * /api/apply:
 *   post:
 *     summary: Apply for a job.
 *     description: Apply for a job with the specified jobId.
 *     tags:
 *       - Applications
 *     requestBody:
 *       description: JSON object containing the jobId.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jobId:
 *                 type: string
 *                 description: The ID of the job to apply for.
 *     responses:
 *       200:
 *         description: Application submitted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserApplication'
 *       400:
 *         description: Bad request. Because of invalid job id.
 *       409:
 *         description: Conflict. User has already applied to this job.
 *       500:
 *         description: Internal server error.
 */

// Route to apply to a job
router.post('/', async (req, res) => {
  const { jobId } = req.body;

  if (jobId && !mongoose.isValidObjectId(jobId)) {
    res.status(400).send('Invalid job id');
    res.end();
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);
    const jobObjectId = new mongoose.Types.ObjectId(jobId);

    const application = await UserApplication.findOne({
      userId,
      jobId: jobObjectId,
    });

    if (application) {
      res.status(409).send('You have already applied to this job.');
    }

    const newApplication = new UserApplication({
      userId: userObjectId,
      jobId: jobObjectId,
    });

    const savedApplication = await newApplication.save();

    res.status(200).json(savedApplication);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
