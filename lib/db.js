import mongoose from 'mongoose';

const { DB_USER, DB_PW, DB_DOMAIN, DB_PROJECT } = process.env;
const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PW}@${DB_DOMAIN}.orplk.mongodb.net/?retryWrites=true&w=majority&appName=${DB_PROJECT}`;

// const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_DOMAIN}/${process.env.DB_PROJECT}?retryWrites=true&w=majority`;

if (!MONGODB_URI) {
   throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
   );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
   cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
   if (cached.conn) {
      return cached.conn;
   }

   if (!cached.promise) {
      const opts = {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         bufferCommands: false
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
         return mongoose;
      });
   }
   cached.conn = await cached.promise;
   return cached.conn;
}

export default dbConnect;
