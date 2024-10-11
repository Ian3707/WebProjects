import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose.connect(
    'mongodb+srv://Admin1:pGq79hzYgmSnKgIR@cluster0.oujukuz.mongodb.net/?retryWrites=true&w=majority',

).then(() => console.log('Database connected'))
.catch((err) => console.log('Database error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});
app.post('/auth/login', (req, res) => {
    console.log(req.body);

    const token = jwt.sign({
        email: req.body.email, 
        fullname: req.body.name,
    }, 'secretcd777')

    res.json({
        success: true,
        token, 
    });
});

app.listen(3333, (err) => {
    if(err){
        return console.log(err);
    }
    console.log('Server started at port: 3333');
});