import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './config/mongodb.js';

// app config
const app = express();
const port = process.env.PORT || 8017;
//const HOSTNAME = 'localhost';
//midddleware
app.use(express.json());
app.use(cors());
connectDB();
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});
app.listen(port, () => {
    console.log('Server running at ' + port);
});
