'use client';
import { useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import useEmailStore from '@/app/store/useEmailStore';
import StepHeader from './StepHeader';
import Choices from './Choices';
import MultiChoices from './MultiChoices';
import Form from './Form';
import ChoiceHelp from './ChoiceHelp';
// import EndStep from './EndStep';

// todo: subtle animated transition between steps

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
         // const finalData = {
         //    info: userInfo,
         //    inputs: userInputs,
         //    choices: userChoices
         // };
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
         // console.log('bb ~ Step.js:34 ~ Step ~ finalData:', finalData);
         handleSubmit(finalData);
      }
   }, [currentStep, userInfo, userInputs, userChoices, handleSubmit]);

   return (
      <div>
         {currentStep.slug !== 'end' && <StepHeader />}
         {moreInfo && showHelp && <ChoiceHelp choice={currentStep} />}
         {choices && (multi ? <MultiChoices /> : <Choices />)}
         {form && <Form />}
         {/* {currentStep.slug === 'end' && <EndStep step={currentStep} />} */}
         {isSending && <SendingComponent />}
         {isSent && <SentComponent />}
         {errorData && <ErrorComponent error={errorData} />}
      </div>
   );
};

export default Step;
