const mongoose = require('mongoose');

const DEFAULT_MONGO_URI = 'mongodb://127.0.0.1:27017/atsdu';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || DEFAULT_MONGO_URI;

    const conn = await mongoose.connect(mongoUri, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

const stopMemoryServer = async () => Promise.resolve();

module.exports = {
  connectDB,
  stopMemoryServer,
};
