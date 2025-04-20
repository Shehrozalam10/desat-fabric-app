import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));

mongoose.connect('mongodb://localhost:27017/desat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000  // Increase timeout to 30 seconds
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });
  