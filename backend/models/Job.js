import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    location: { type: String, required: true },
    companyName: { type: String, required: true },
    roleType: { type: String, required: true },
    roleLevel: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
