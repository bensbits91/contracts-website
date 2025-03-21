import { NextResponse } from 'next/server';
import createContact from '@/lib/contactService';

export async function POST(req) {
   try {
      const body = await req.json();
      const contact = await createContact(body);
      return NextResponse.json({ success: true, data: contact }, { status: 201 });
   } catch (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
   }
}
