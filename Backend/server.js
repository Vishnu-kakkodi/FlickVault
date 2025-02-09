import express from 'express';
import http from "http";
import route from '../Backend/Routes/routes.js';
import cors from 'cors';
import mongoose from 'mongoose';



const app = express();

app.use(cors({
    origin: process.env.NODE_ENV === 'development' 
        ? true 
        : ['http://localhost:5174', 'http://localhost:4000'],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    maxAge: 86400
}));

app.use(express.json());

app.use('/api', route);

mongoose.connect('mongodb://localhost:27017/flickvault')
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.log('Mongodb connection:',err));

app.listen(4000, function () {
    console.log("server is running at http://localhost:4000");
});

export default app;