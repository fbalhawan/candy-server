import mongoose from "mongoose";

export function connectDb(){
    const host = process.env.DB_HOST || 'mongodb://localhost/candy_db';
    
    let options : mongoose.ConnectOptions = {
        dbName: process.env.DB_NAME
    }
    mongoose.connect(host, options );
}