const express = require('express');
const productsRoute = require('./routes/productsRoute');
const userRoute = require('./routes/userRoute');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

// connect to database
connectDB();

app.use(express.json());
app.use('/api/products', productsRoute);
app.use('/api/user', userRoute);
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);

const PORT = 5555 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));