'use client';
import { useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import useEmailStore from '@/app/store/useEmailStore';
import StepHeader from './StepHeader';
import Choices from './Choices';
import MultiChoices from './MultiChoices';
import Form from './Form';
import ChoiceHelp from './ChoiceHelp';
import { Thanks } from '@/app/components/thanks';

const Step = () => {
   const {
      currentStep,
      showHelp,
      userInfo,
      userInputs,
      userChoices,
      reset: resetJourney
   } = useJourneyStore();
   const { form, choices, multi, moreInfo } = currentStep;
   const {
      isSending,
      isSent,
      errorData,
      handleSubmit,
      SendingComponent,
      ErrorComponent,
      reset: resetEmail
   } = useEmailStore();

   useEffect(() => {
      if (currentStep.slug === 'end') {
         const { name, email } = userInputs;
         if (!email) {
            alert('Please enter your email address');
            return;
         }
         const finalData = {
            name,
            email,
            message: JSON.stringify({ userChoices, userInputs })
         };
         handleSubmit(finalData);
         resetEmail();
      }
   }, [currentStep, userInfo, userInputs, userChoices, handleSubmit]);

   useEffect(() => {
      return () => {
         resetJourney();
         resetEmail();
      };
   }, [resetJourney, resetEmail]);

   return (
      <div>
         {currentStep.slug !== 'end' && <StepHeader />}
         {moreInfo && showHelp && <ChoiceHelp choice={currentStep} />}
         {choices && (multi ? <MultiChoices /> : <Choices />)}
         {form && <Form />}
         {isSending && <SendingComponent />}
         {isSent && (
            <Thanks
               heading='Thanks :)'
               content="I'll get back to you ASAP"
               links={[
                  {
                     text: 'Have another project in mind?',
                     onClick: () => {
                        resetJourney();
                        resetEmail();
                     }
                  },
                  { text: 'Any questions?', href: '/faq' }
               ]}
            />
         )}
         {errorData && <ErrorComponent error={errorData} />}
      </div>
   );
};

export default Step;
