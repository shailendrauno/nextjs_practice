import mongoose from "mongoose";

export async function conect() {
    try {
       await mongoose.connect(process.env.MONGO_URI!);
       const connection = mongoose.connection;

       connection.on('connected', ()=> {
        console.log('MonhoDB connected successfully');
       })

       connection.on('error', (err)=> {
        console.log('mongoDB connection error', err);
        process.exit(1)
       })
       
    } catch (error) {
        console.log('somthing went wrong');
        console.log(error);
    }
}