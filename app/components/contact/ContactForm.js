'use client';
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
      ErrorComponent
   } = useEmailStore();

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
