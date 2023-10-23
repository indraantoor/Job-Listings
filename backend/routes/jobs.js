import { Router } from 'express';
import JobSchema from '../models/Job.js';
import UserApplication from '../models/UserApplication.js';
import JobDescription from '../models/JobDescription.js';
import mongoose from 'mongoose';
import { MockConfig } from '../mock/mocks.config.js';

const router = Router();

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Get all job listings.
 *     description: Retrieve a list of all available job listings.
 *     tags:
 *       - Jobs
 *     responses:
 *       200:
 *         description: Successful response with a list of job listings.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/JobListing'
 *       500:
 *         description: Internal server error.
 * components:
 *   schemas:
 *     JobListing:
 *       type: object
 *       properties:
 *         jobTitle:
 *           type: string
 *           description: The title of the job.
 *         location:
 *           type: string
 *           description: The location of the job.
 *         companyName:
 *           type: string
 *           description: The name of the company offering the job.
 *         companyLogo:
 *           type: string
 *           description: The url of company logo image.
 *         roleType:
 *           type: string
 *           description: The type of the job role.
 *         roleLevel:
 *           type: string
 *           description: The level of the job role.
 */

// a randomly generated user id to simulate a real user
const userId = MockConfig.user;

// Route to get all job listings
router.get('/', async (req, res) => {
  try {
    const jobs = await JobSchema.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @swagger
 * /api/jobs/{jobId}:
 *   get:
 *     summary: Get a job description and check if the user has applied to the job.
 *     description: Retrieve a job description by its ID and check if the user has applied to it.
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: jobId
 *         required: true
 *         description: The ID of the job description to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with job description and application status.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 job:
 *                   type: object
 *                   description: The job description.
 *                 hasAppliedToJob:
 *                   type: boolean
 *                   description: Indicates whether the user has applied to the job.
 *       400:
 *         description: Bad request. Because of invalid job id.
 *       500:
 *         description: Internal server error.
 */

// Route to get a job description
router.get('/:jobId', async (req, res) => {
  const { jobId } = req.params;

  if (jobId && !mongoose.isValidObjectId(jobId)) {
    res.status(400).send('Invalid job id');
    res.end();
  }

  try {
    const jobObjectId = new mongoose.Types.ObjectId(jobId);
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const application = await UserApplication.findOne({
      userId: userObjectId,
      jobId: jobObjectId,
    });

    const hasAppliedToJob = application ? true : false;

    const jobDescription = await JobDescription.findOne({ jobId: jobObjectId });

    res.status(200).json({ job: jobDescription, hasAppliedToJob });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
