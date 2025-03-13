'use client';
import { useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import StepHeader from './StepHeader';
import Choices from './Choices';
import Form from './Form';
import ChoiceHelp from './ChoiceHelp';
import EndStep from './EndStep';

// todo: subtle animated transition between steps

const Step = () => {
   const { currentStep, initialize, showHelp } = useJourneyStore();
   const { form, choices, moreInfo } = currentStep;

   useEffect(() => {
      initialize();
   }, []);

   return (
      <div>
         {currentStep.slug !== 'end' && <StepHeader />}
         {moreInfo && showHelp && <ChoiceHelp choice={currentStep} />}
         {choices && <Choices />}
         {form && <Form />}
         {currentStep.slug === 'end' && <EndStep step={currentStep} />}
      </div>
   );
};

export default Step;
