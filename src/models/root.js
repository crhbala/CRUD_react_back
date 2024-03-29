import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

try {
    console.log(`${process.env.DB_URL}/${process.env.DB_NAME}`);
    mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
    
} catch(error) {
    console.log(error);
}

export default mongoose