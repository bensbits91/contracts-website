'use client';
import { Section } from '@/app/components/layout';
import { Heading } from '@/app/components/typography';
import { ContactForm } from '@/app/components/contact';

const ContactPage = () => {
   const fields = [
      {
         name: 'Name',
         type: 'text',
         placeholder: "Optional: What's your name?"
      },
      {
         name: 'Email',
         type: 'email',
         required: true
      },
      {
         name: 'Message',
         label: 'Message',
         type: 'textarea',
         placeholder: 'How can I help?',
         required: true
      },
      {
         name: 'Submit',
         type: 'submit'
      }
   ];

   return (
      <>
         <Section bottom='sm'>
            <Heading level={1}>Contact Me</Heading>
         </Section>
         <Section top='sm'>
            <ContactForm fields={fields} />
         </Section>
      </>
   );
};

export default ContactPage;
