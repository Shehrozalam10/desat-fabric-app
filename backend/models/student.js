// import mongoose from'mongoose';

// const studentSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   documentPath: String,
//   did: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// export default mongoose.model('Student', studentSchema);
import mongoose from 'mongoose';

// const studentSchema = new mongoose.Schema({
//   studentId: { type: String, required: true, unique: true },
//   data: { type: Object, required: true },
//   documents: {
//     gateScorecard: String,
//     markSheets: String,
//     categoryCert: String
//   },
//   createdAt: { type: Date, default: Date.now }
// });

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    gateScore: Number,
    did: String,
    documentUrl: String,
    vc: Object,
    submittedAt: Date
  });

export default mongoose.model('Student', studentSchema);
