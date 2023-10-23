import mongoose from 'mongoose';

const UserApplicationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    jobId: { type: mongoose.Types.ObjectId, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model('UserApplication', UserApplicationSchema);
