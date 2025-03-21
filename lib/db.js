import mongoose from 'mongoose';

const { DB_USER, DB_PW, DB_DOMAIN, DB_PROJECT } = process.env;
const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PW}@${DB_DOMAIN}.orplk.mongodb.net/?retryWrites=true&w=majority&appName=${DB_PROJECT}`;

if (!MONGODB_URI) {
   throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
   );
}

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
         bufferCommands: false,
         maxPoolSize: 10, // Maintain up to 10 socket connections
         serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
         socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
         return mongoose;
      });
   }
   cached.conn = await cached.promise;
   return cached.conn;
}

export default dbConnect;
