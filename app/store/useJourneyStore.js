import { create } from 'zustand';
import { collectUserInfo } from '@/utils/collectUserInfo';
import { steps } from '@/app/data/steps';

const initialStep = steps.find(step => step.slug === 'start');

const useJourneyStore = create(set => ({
   currentStep: initialStep,
   userInfo: null,
   userInputs: {},
   userChoices: {},
   customChoices: {},
   initialize: () => {
      const clientInfo = collectUserInfo();
      console.log('bb ~ useJourneyStore.js:14 ~ clientInfo:', clientInfo);
      set({ userInfo: clientInfo });
   },
   handleChoice: ({ currentStep, choice }) => {
      set(state => {
         const nextStep =
            steps.find(s => s.slug === choice.nextSlug) ||
            steps.find(s => s.slug === currentStep.nextSlug);

         const updatedChoices = { ...state.userChoices, [currentStep.slug]: choice.text };
         const updatedCustomChoices = { ...state.customChoices };
         if (choice.customText?.trim()) {
            updatedChoices[`${currentStep.slug}_custom`] = choice.customText;
            updatedCustomChoices[`${currentStep.slug}_custom`] = choice.customText;
         } else {
            delete updatedChoices[`${currentStep.slug}_custom`];
            delete updatedCustomChoices[`${currentStep.slug}_custom`];
         }

         const shouldNavigate =
            choice.text !== 'Write my own' || choice.customText?.trim();

         return {
            userChoices: updatedChoices,
            customChoices: updatedCustomChoices,
            currentStep: (shouldNavigate && nextStep) || state.currentStep
         };
      });
   },
   handleForm: ({ formData, nextSlug }) => {
      set(state => {
         const updatedInputs = { ...state.userInputs, ...formData };
         if (nextSlug === 'end') {
            const finalData = {
               info: state.userInfo,
               inputs: updatedInputs,
               choices: state.userChoices
            };
            console.log('Final Data:', finalData);
         }
         const nextStep = steps.find(s => s.slug === nextSlug);
         return {
            userInputs: updatedInputs,
            currentStep: nextStep || state.currentStep
         };
      });
   },
   handleNavigate: step => {
      set({ currentStep: step });
   }
}));

export default useJourneyStore;
