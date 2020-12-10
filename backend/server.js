import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
 import userRoute from './routes/userRoute';
 import productRoute from './routes/productRoute';
 import orderRoute from './routes/orderRoute';

 const path = require('path');

 const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}).catch (err => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
    res.send(config.PAYPAL_CLIENT_ID);
})


if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
})
}

const PORT = process.env.PORT || 5000;

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});

module.exports = app;



