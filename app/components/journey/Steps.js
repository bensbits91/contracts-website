'use client';
import { useJourney } from '@/app/hooks/useJourney';
import Step from './Step';
import StepTracker from './StepTracker';

const Steps = () => {
   const {
      currentStep,
      userChoices,
      userInputs,
      handleChoice,
      handleForm,
      handleNavigate
   } = useJourney();

   return (
      <>
         <Step
            step={currentStep}
            handleChoice={handleChoice}
            handleForm={handleForm}
            selectedChoice={userChoices[currentStep.slug]}
            userInputs={userInputs}
         />
         <StepTracker
            currentStep={currentStep}
            userChoices={userChoices}
            userInputs={userInputs}
            handleNavigate={handleNavigate}
         />
      </>
   );
};

export default Steps;
