import { create } from 'zustand';
import { collectUserInfo } from '@/utils/collectUserInfo';
import { steps } from '@/app/data/steps';

const initialStep = steps.find(step => step.slug === 'start');

const useJourneyStore = create((set, get) => ({
   currentStep: initialStep,
   userInfo: null,
   userInputs: {},
   userChoices: {},
   customChoices: {},
   showHelp: false,
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

         if (shouldNavigate && nextStep) {
            get().handleNavigate(nextStep);
         }

         return {
            userChoices: updatedChoices,
            customChoices: updatedCustomChoices,
            currentStep: state.currentStep
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

         get().handleNavigate(nextStep);

         return {
            userInputs: updatedInputs,
            currentStep: state.currentStep
         };
      });
   },
   handleNavigate: step => {
      setTimeout(() => {
         set({ currentStep: step });
      }, 300);
   },
   handleHelp: () => {
      set(state => ({ showHelp: !state.showHelp }));
   }
}));

export default useJourneyStore;
