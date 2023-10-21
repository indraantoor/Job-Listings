import { Router } from 'express';
import { JOBS } from '../mock/jobs.js';
import { JOB_DESCRIPTION } from '../mock/jobDescription.js';

const router = Router();

// Route to get all job listings
router.get('/', async (req, res) => {
  res.status(200).json({ jobs: JOBS });
});

// Route to get a job description
router.get('/:jobId?', async (req, res) => {
  const { jobId } = req.params;
  res.status(200).json({ job: JOB_DESCRIPTION });
});

export default router;
