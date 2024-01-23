import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();

import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js"

export default async function connectDB(){
    try{
        const dbinfo = await mongoose.connect(process.env.MONGO_URI+DB_NAME);
    }
    catch(error){
        console.log("Error from db.js",error);
    }
}