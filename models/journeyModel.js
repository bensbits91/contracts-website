import mongoose from 'mongoose';

const JourneySchema = new mongoose.Schema(
   {
      info: {
         // ip: { type: String }, // GDPR
         // location: { type: String }, // GDPR
         userAgent: { type: String },
         screenResolution: { type: String },
         browserLanguage: { type: String },
         referrer: { type: String },
         timeZone: { type: String }
      },
      inputs: {
         email: { type: String, required: true },
         name: { type: String },
         phone: { type: String },
         comments: { type: String }
      },
      choices: [{ type: mongoose.Schema.Types.Mixed }]
      // completed: { type: Boolean, default: false },
      // completedAt: { type: Date }
   },
   { timestamps: true }
);

export default mongoose.models.Journey || mongoose.model('Journey', JourneySchema);
