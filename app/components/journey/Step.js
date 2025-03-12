'use client';
import { useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import StepHeader from './StepHeader';
import Choices from './Choices';
import Form from './Form';

// todo: subtle animated transition between steps

const Step = () => {
   const { currentStep, initialize, showHelp } = useJourneyStore();
   const { form, choices, moreInfo } = currentStep;

   useEffect(() => {
      initialize();
   }, []);

   return (
      <div>
         <StepHeader />
         {moreInfo && showHelp && <p>{moreInfo}</p>}
         {choices && <Choices />}
         {form && <Form />}
      </div>
   );
};

export default Step;
