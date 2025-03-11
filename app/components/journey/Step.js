'use client';
import { useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import Form from './Form';
import Choices from './Choices';

// todo: subtle animated transition between steps

const Step = () => {
   const { currentStep, initialize } = useJourneyStore();
   const { heading, description, form, choices } = currentStep;

   useEffect(() => {
      initialize();
   }, []);

   return (
      <div>
         <h2>{heading}</h2>
         <p>{description}</p>
         {form && <Form />}
         {choices && <Choices />}
      </div>
   );
};

export default Step;
