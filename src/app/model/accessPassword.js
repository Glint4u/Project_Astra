// User model
import mongoose from 'mongoose';

const AccessPassword = new mongoose.Schema(
  {
    password: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.AccessPassword || mongoose.model("AccessPassword", AccessPassword);
