import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
   {
      name: {
         type: String
      },
      email: {
         type: String,
         required: true
      },
      message: {
         type: mongoose.Schema.Types.Mixed,
         required: true
      }
   },
   { timestamps: true }
);

export default mongoose.models?.Contact || mongoose.model('Contact', contactSchema);
