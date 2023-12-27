import mongoose from 'mongoose';
mongoose.set('strictQuery',true);

const conn = mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>console.log("Database is successfully connected")).catch(err=>console.log(err));

export default conn;