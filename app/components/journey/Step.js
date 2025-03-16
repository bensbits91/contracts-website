'use client';
import useJourneyStore from '@/app/store/useJourneyStore';
import StepHeader from './StepHeader';
import Choices from './Choices';
import MultiChoices from './MultiChoices';
import Form from './Form';
import ChoiceHelp from './ChoiceHelp';
import EndStep from './EndStep';

// todo: subtle animated transition between steps

const Step = () => {
   const { currentStep, initialize, showHelp } = useJourneyStore();
   const { form, choices, multi, moreInfo } = currentStep;

   return (
      <div>
         {currentStep.slug !== 'end' && <StepHeader />}
         {moreInfo && showHelp && <ChoiceHelp choice={currentStep} />}
         {choices && (multi ? <MultiChoices /> : <Choices />)}
         {form && <Form />}
         {currentStep.slug === 'end' && <EndStep step={currentStep} />}
      </div>
   );
};

export default Step;
