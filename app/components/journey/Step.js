'use client';
import { useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import useEmailStore from '@/app/store/useEmailStore';
import StepHeader from './StepHeader';
import Choices from './Choices';
import MultiChoices from './MultiChoices';
import Form from './Form';
import ChoiceHelp from './ChoiceHelp';

const Step = () => {
   const { currentStep, showHelp, userInfo, userInputs, userChoices } = useJourneyStore();
   const { form, choices, multi, moreInfo } = currentStep;
   const {
      isSending,
      isSent,
      errorData,
      handleSubmit,
      SendingComponent,
      SentComponent,
      ErrorComponent
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
      }
   }, [currentStep, userInfo, userInputs, userChoices, handleSubmit]);

   return (
      <div>
         {currentStep.slug !== 'end' && <StepHeader />}
         {moreInfo && showHelp && <ChoiceHelp choice={currentStep} />}
         {choices && (multi ? <MultiChoices /> : <Choices />)}
         {form && <Form />}
         {isSending && <SendingComponent />}
         {isSent && <SentComponent />}
         {errorData && <ErrorComponent error={errorData} />}
      </div>
   );
};

export default Step;
