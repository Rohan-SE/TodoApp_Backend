import express from 'express';
import cors from 'cors';
import conn from './Config/dbConfig.js'
import userRouter from './Routes/userRouter.js';

const app = express();

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.listen(5000,console.log("Server is listening on port:5000"))