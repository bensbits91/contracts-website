'use client';
import { useState } from 'react';
import { Form } from '@/app/components/form';
import { Thanks } from '@/app/components/thanks';

const ContactPage = () => {
   const [isCompleted, setIsCompleted] = useState(false);

   const fields = [
      {
         name: 'Name',
         type: 'text',
         placeholder: ''
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
         placeholder: '',
         required: true
      },
      {
         name: 'Submit',
         type: 'submit'
      }
   ];

   const handleForm = formData => {
      console.log('Form submitted with data:', formData);
      setIsCompleted(true);
   };

   return isCompleted ? (
      <Thanks
         heading='Thanks :)'
         content="I'll get back to you ASAP"
         links={[
            { text: 'Have a project in mind?', href: '/journey' },
            { text: 'Any questions?', href: '/faq' }
         ]}
      />
   ) : (
      <Form fields={fields} handleForm={handleForm} />
   );
};

export default ContactPage;
