import { create } from 'zustand';
import { Thanks } from '@/app/components/thanks';
import { collectUserInfo } from '@/utils/collectUserInfo';
// import createContact from '@/lib/contactService';

const useEmailStore = create((set, get) => ({
   //    userInfo: null,
   isSending: false,
   isSent: false,
   errorData: null,
   handleSending: () => {
      set({ isSending: true });
   },
   handleSuccess: () => {
      set({ isSending: false, isSent: true });
   },
   handleError: error => {
      set({ isSending: false, isSent: false, errorData: error });
   },
   handleSubmit: async formData => {
      console.log('Attempting to send email:', formData);

      get().handleSending();

      try {
         // Add user info to form data
         formData.userInfo = collectUserInfo();

         // Save form data to MongoDB
         //    const contact = await createContact(formData);
         //    console.log('Contact saved:', contact);

         // // Send email
         // const response = await fetch('/api/send-email', {
         //    method: 'POST',
         //    headers: {
         //       'Content-Type': 'application/json'
         //    },
         //    body: JSON.stringify(formData)
         // });

         // if (response.ok) {
         //       get().handleSuccess();
         //    } else {
         //       console.log('bb ~ response:', response);
         //       get().handleError(response);
         //    }
         // } catch (error) {
         //    console.log('bb ~ error:', error);
         //    get().handleError(error);
         // }

         const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         });

         if (response.ok) {
            get().handleSuccess();

            // Send email
            const response = await fetch('/api/send-email', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData)
            });

            // if (response.ok) {
         } else {
            const errorData = await response.json();
            console.log('bb ~ response:', errorData);
            get().handleError(errorData);
         }
      } catch (error) {
         console.log('bb ~ error:', error);
         get().handleError(error);
      }
   },
   SendingComponent: () => (
      <div>
         <p>Sending message...</p>
      </div>
   ),
   SentComponent: () => (
      <Thanks
         heading='Thanks :)'
         content="I'll get back to you ASAP"
         links={[
            { text: 'Have a project in mind?', href: '/journey' },
            { text: 'Any questions?', href: '/faq' }
         ]}
      />
   ),
   ErrorComponent: error => (
      <div>
         <p>Error: {JSON.stringify(error)}</p>
      </div>
   )
}));

export default useEmailStore;
