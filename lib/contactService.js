import dbConnect from './db';
import Contact from '@/models/contactModel';

export default async function createContact(contactData) {
   await dbConnect();
   const contact = new Contact(contactData);
   await contact.save();
   return contact;
}
