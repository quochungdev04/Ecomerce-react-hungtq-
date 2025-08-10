import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRoute from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

//app config
const app = express();
const port = process.env.PORT || 8017;
const hostname = 'localhost';
//midddleware
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();
app.use('/api/user', userRoute);
app.use('/api/product', productRouter);
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
});
