import { Router } from 'express';
import UserApplication from '../models/UserApplication.js';
import mongoose from 'mongoose';
import { MockConfig } from '../mock/mocks.config.js';

const router = Router();

// a randomly generated user id to simulate a real user
const userId = MockConfig.user;

// Route to apply to a job
router.post('/', async (req, res) => {
  const { jobId } = req.body;

  // try {
  const userObjectId = new mongoose.Types.ObjectId(userId);
  const jobObjectId = new mongoose.Types.ObjectId(jobId);

  const application = await UserApplication.findOne({
    userId,
    jobId: jobObjectId,
  });

  if (application) {
    res.status(400).send('You have already applied to this job.');
  }

  const newApplication = new UserApplication({
    userId: userObjectId,
    jobId: jobObjectId,
  });

  const savedApplication = await newApplication.save();

  res.status(200).json(savedApplication);
  // } catch (err) {
  // res.status(500).json(err);
  // }
});

export default router;
