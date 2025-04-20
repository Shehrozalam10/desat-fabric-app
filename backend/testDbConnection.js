import {MongoClient} from 'mongodb';

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'desat';

async function testDbConnection() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('✅ Successfully connected to MongoDB');
    const db = client.db(dbName);
    const colleges = db.collection('colleges');
    
    const college = await colleges.findOne({ collegeName: 'Sample College' });
    console.log(college);
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message);
  } finally {
    await client.close();
  }
}

testDbConnection();
