import { useEffect, useState, useMemo } from 'react';
import { collectUserInfo } from '@/utils/collectUserInfo';
import { steps } from '@/app/data/steps';

export const useJourney = () => {
   const initialStep = useMemo(() => steps.find(step => step.slug === 'start'), []);
   const [currentStep, setCurrentStep] = useState(initialStep);
   const [userInfo, setUserInfo] = useState(null);
   const [userInputs, setUserInputs] = useState({});
   const [userChoices, setUserChoices] = useState({});

   useEffect(() => {
      const clientInfo = collectUserInfo();
      setUserInfo(clientInfo);
      setCurrentStep(initialStep);
   }, []);

   const handleChoice = ({ step, choice }) => {
      setUserChoices({ ...userChoices, [step.slug]: choice.text });
      const nextStep =
         steps.find(s => s.slug === choice.nextSlug) ||
         steps.find(s => s.slug === step.nextSlug);
      if (nextStep) {
         setCurrentStep(nextStep);
      }
   };

   const handleForm = ({ formData, nextSlug }) => {
      setUserInputs({ ...userInputs, ...formData });

      if (!nextSlug) {
         return;
      }

      if (nextSlug === 'end') {
         const finalData = { info: userInfo, inputs: userInputs, choices: userChoices };
         console.log('bb ~ useJourney.js:35 ~ handleForm ~ finalData:', finalData);
      }

      const nextStep = steps.find(s => s.slug === nextSlug);
      if (nextStep) {
         setCurrentStep(nextStep);
      }
   };

   const handleNavigate = step => {
      setCurrentStep(step);
   };

   return {
      currentStep,
      userChoices,
      userInputs,
      handleChoice,
      handleForm,
      handleNavigate
   };
};
