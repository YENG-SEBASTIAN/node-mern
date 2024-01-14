
import dotenv from 'dotenv';


dotenv.config({path: ".env"});

const dev = process.env.NODE_ENV === "development";

export const DB_URL = dev 
    ? process.env['MONGO_SERVER']
    : process.env['MONGO_SERVER'];