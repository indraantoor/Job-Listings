import express from 'express';
import cors from 'cors';
import jobsRoute from './routes/jobs.js';
import mongoose from 'mongoose';
import { config } from 'dotenv';

const app = express();

config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/jobs', jobsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server is running! on port: ${PORT}`);
});
