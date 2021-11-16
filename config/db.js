const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const conn = mongoose.connection;
  conn.on('connected', () => console.log('DB Connected Successfully'));
  conn.on('disconnected', () => console.log('DB Disconnected Successfully'));
}

module.exports = connectDB;