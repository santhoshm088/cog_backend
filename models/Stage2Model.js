import mongoose from 'mongoose';

const stage2chema = mongoose.Schema(
  {
    rollno: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

const Stage2 = mongoose.model('Stage2', stage2chema);
export default Stage2;
