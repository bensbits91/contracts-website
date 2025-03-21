import dbConnect from './db';
import Journey from '@/models/journeyModel';

export default async function createJourney(journeyData) {
   await dbConnect();
   const journey = new Journey(journeyData);
   await journey.save();
   return journey;
}
