const express = require('express');
const productsRoute = require('./routes/productsRoute');
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoute');
const orderRoute = require('./routes/orderRoute');
const cartRoute = require('./routes/cartRoute');
const checkoutRoute = require('./routes/checkoutRoute')
const app = express();
const path = require('path');
require('dotenv').config();



connectDB();

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/products', productsRoute);
app.use('/api/orders', orderRoute)
app.use('/api/cart', cartRoute);
app.use('/api/checkout', checkoutRoute);

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));