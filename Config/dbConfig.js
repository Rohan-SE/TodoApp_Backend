import mongoose from 'mongoose';
mongoose.set('strictQuery',true);

const conn = mongoose.connect('mongodb://localhost:27017/TodoApp').then(()=>console.log("Database is successfully connected")).catch(err=>console.log(err));

export default conn;