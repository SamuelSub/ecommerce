const express = require('express');
const productsRoute = require('./routes/productsRoute');
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoute');
const app = express();
require('dotenv').config();

// connect to database
connectDB();

app.use(express.json());
app.use('/api/products', productsRoute);
app.use('/api/auth', authRoute);

const PORT = 5555 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));