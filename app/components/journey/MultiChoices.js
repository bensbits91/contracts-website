import { useState, useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import Choice from './Choice';
import CustomChoice from './CustomChoice';
import { Button } from '@/app/components/inputs';
import styles from './MultiChoices.module.css';

const MultiChoices = () => {
   const {
      currentStep,
      userChoices,
      customChoices,
      handleChoice,
      handleNavigateFromSlug
   } = useJourneyStore();
   const { choices, nextSlug } = currentStep;
   const selectedChoices = userChoices[currentStep.slug] || [];
   const [customChoiceText, setCustomChoiceText] = useState(
      customChoices[`${currentStep.slug}_custom`] || ''
   );

   useEffect(() => {
      setCustomChoiceText(customChoices[`${currentStep.slug}_custom`] || '');
   }, [currentStep, customChoices]);

   const handleChoiceClick = choice => {
      // todo: refactor to use a constant
      if (choice.text === 'Write my own') {
         setCustomChoiceText(customChoices[`${currentStep.slug}_custom`] || '');
      }

      let updatedChoices;

      // todo: refactor to use a constant
      /* if (choice.text === "I'm not sure what I need.") {
         updatedChoices = [choice.text];
      } else  */ if (selectedChoices.includes(choice.text)) {
         updatedChoices = selectedChoices.filter(item => item !== choice.text);
      } else {
         updatedChoices = [...selectedChoices, choice.text];
      }

      handleChoice({ currentStep, choice: { ...choice, text: updatedChoices } });
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
      <div>
         <div className={styles.headWrap}>
            <div className={styles.textWrap}>
               You can select multiple choices for this step.
            </div>
            <div className={styles.buttonWrap}>
               <Button onClick={() => handleNavigateFromSlug(nextSlug)}>Next</Button>
            </div>
         </div>
         {choices.map((choice, index) => {
            const isSelected = selectedChoices.includes(choice.text);
            return (
               <div key={index}>
                  <Choice
                     choice={choice}
                     multi={true}
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
      </div>
   );
};

export default MultiChoices;
