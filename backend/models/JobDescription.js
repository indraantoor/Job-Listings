import mongoose from 'mongoose';

const JobDescriptionSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Types.ObjectId, required: true, unique: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('JobDescription', JobDescriptionSchema);
