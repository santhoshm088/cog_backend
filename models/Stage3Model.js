import mongoose from 'mongoose';

const stage3Schema = mongoose.Schema(
  {
    rollno: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

const Stage3 = mongoose.model('Stage3', stage3Schema);
export default Stage3;
