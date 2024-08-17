import mongoose from 'mongoose';
import chalk from "chalk";


export async function connectMongoDB(url) {
    mongoose.connect(url).then(()=>{
        return console.log(chalk.blue('MongoDB connected!'))
    });    
}