'use client';
import { useEffect } from 'react';
import useEmailStore from '@/app/store/useEmailStore';
import { Form } from '@/app/components/form';

const ContactPage = () => {
   const {
      isSending,
      isSent,
      errorData,
      handleSubmit,
      SendingComponent,
      SentComponent,
      ErrorComponent,
      reset
   } = useEmailStore();

   useEffect(() => {
      return () => {
         reset();
      };
   }, [reset]);

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

   const isNormal = !isSending && !isSent && !errorData;

   const handleContactSubmit = formData => {
      handleSubmit(formData);
      reset();
   };

   return (
      <>
         {isNormal && <Form fields={fields} handleForm={handleSubmit} />}
         {isSending && <SendingComponent />}
         {isSent && <SentComponent />}
         {errorData && <ErrorComponent error={errorData} />}
      </>
   );
};

export default ContactPage;
