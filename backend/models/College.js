// backend/models/College.js
import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  passwordHash: String,
  did: String,
  seatMatrix: Object,
});

export default mongoose.model('College', collegeSchema);
