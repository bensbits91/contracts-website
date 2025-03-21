import mongoose from 'mongoose';

const { DB_USER, DB_PW, DB_DOMAIN, DB_PROJECT } = process.env;
const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PW}@${DB_DOMAIN}.orplk.mongodb.net/?retryWrites=true&w=majority&appName=${DB_PROJECT}`;


let cached = global.mongoose;

if (!cached) {
   cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
   if (!MONGODB_URI) {
      throw new Error(
         'Please define the MONGODB_URI environment variable inside .env.local'
      );
   }

   if (cached.conn) {
      return cached.conn;
   }
   if (!cached.promise) {
      const opts = {
         bufferCommands: false
      };
      cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
         return mongoose;
      });
   }
   try {
      cached.conn = await cached.promise;
   } catch (e) {
      cached.promise = null;
      throw e;
   }

   return cached.conn;
}

export default dbConnect;
