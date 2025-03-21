import { create } from 'zustand';
import { Thanks } from '@/app/components/thanks';
import { collectUserInfo } from '@/utils/collectUserInfo';

const useEmailStore = create((set, get) => ({
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
      get().handleSending();

      try {
         // Add user info to form data
         formData.userInfo = collectUserInfo();

         // Save form data to MongoDB
         const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         });

         if (response.ok) {
            get().handleSuccess();

            // Send email -- todo: separate
            const response = await fetch('/api/send-email', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData)
            });
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
