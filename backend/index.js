import express from 'express';
import cors from 'cors';
import jobsRoute from './routes/jobs.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server is running! on port: ${PORT}`);
});
