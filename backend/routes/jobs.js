import { Router } from 'express';
import JobSchema from '../models/Job.js';
import UserApplication from '../models/UserApplication.js';
import JobDescription from '../models/JobDescription.js';
import mongoose from 'mongoose';

const router = Router();

// Route to get all job listings
router.get('/', async (req, res) => {
  try {
    const jobs = await JobSchema.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a job description
router.get('/:jobId', async (req, res) => {
  const { jobId } = req.params;

  try {
    const userId = new mongoose.Types.ObjectId(2);
    const jobObjectId = new mongoose.Types.ObjectId(jobId);

    const application = await UserApplication.findOne({
      userId,
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
