import { useState, useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import Choice from './Choice';
import CustomChoice from './CustomChoice';

const Choices = () => {
   const { currentStep, userChoices, customChoices, handleChoice } = useJourneyStore();
   const { choices } = currentStep;
   const selectedChoice = userChoices[currentStep.slug];
   const [customChoiceText, setCustomChoiceText] = useState(
      customChoices[`${currentStep.slug}_custom`] || ''
   );

   useEffect(() => {
      setCustomChoiceText(customChoices[`${currentStep.slug}_custom`] || '');
   }, [currentStep, customChoices]);

   const handleChoiceClick = choice => {
      if (choice.text === 'Write my own') {
         setCustomChoiceText(customChoices[`${currentStep.slug}_custom`] || '');
      }
      handleChoice({ currentStep, choice });
   };

   const handleCustomChoiceChange = e => {
      setCustomChoiceText(e.target.value);
   };

   const handleCustomChoiceSave = choice => {
      handleChoice({
         currentStep,
         choice: {
            ...choice,
            customText: customChoiceText
         }
      });
   };

   return (
      <>
         {choices.map((choice, index) => {
            const isSelected = selectedChoice === choice.text;
            return (
               <div key={index}>
                  <Choice
                     choice={choice}
                     isSelected={isSelected}
                     handleChoiceClick={handleChoiceClick}
                  />
                  {choice.text === 'Write my own' && isSelected && (
                     <CustomChoice
                        choice={choice}
                        customChoiceText={customChoiceText}
                        handleCustomChoiceChange={handleCustomChoiceChange}
                        handleCustomChoiceSave={handleCustomChoiceSave}
                     />
                  )}
               </div>
            );
         })}
      </>
   );
};

export default Choices;
