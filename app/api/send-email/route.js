import nodemailer from 'nodemailer';
import validator from 'validator';

const POST = async request => {
   try {
      const { name, email, message } = await request.json();

      if (!name || !email || !message) {
         return new Response(JSON.stringify({ error: 'All fields are required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
         });
      }

      // Validate email
      if (!validator.isEmail(email)) {
         return new Response(JSON.stringify({ error: 'Invalid email address' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
         });
      }

      // Sanitize input
      const sanitizedEmail = validator.escape(email);
      const sanitizedName = validator.escape(name);
      const sanitizedMessage = validator.escape(message);

      // Create a transporter object using SMTP transport
      const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
         }
      });

      // Email options
      const mailOptions = {
         from: sanitizedEmail, // I think it's sent from my 'to' email, which is fine; including sender email address in the body of the email
         to: process.env.EMAIL_USER,
         subject: `Message from ${sanitizedName}`,
         text: `From: ${sanitizedEmail}\n\nName: ${sanitizedName}\n\n${sanitizedMessage}`
      };

      await transporter.sendMail(mailOptions);
      return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
         status: 200,
         headers: { 'Content-Type': 'application/json' }
      });
   } catch (error) {
      console.log('bb ~ error:', error);
      return new Response(JSON.stringify({ error: 'Error sending email' }), {
         status: 500,
         headers: { 'Content-Type': 'application/json' }
      });
   }
};

export { POST };
