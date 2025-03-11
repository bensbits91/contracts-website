import { useState, useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import {
   CircleIcon,
   CircleCaratIcon,
   CircleCheckIcon,
   PencilIcon
} from '@/app/components/icons';
import styles from './Choices.module.css';
import classNames from '@/utils/classNames';

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

   const Icon = ({ isSelected }) => {
      if (isSelected) {
         return <CircleCheckIcon />;
      } else {
         return <CircleIcon />;
      }
   };

   return (
      <>
         {choices.map((choice, index) => {
            const isSelected = selectedChoice === choice.text;
            return (
               <div key={index}>
                  <div
                     className={classNames(styles.choice, isSelected && styles.selected)}
                     onClick={() => handleChoiceClick(choice)}>
                     <div className={styles.content}>
                        <div className={styles.iconWrap}>
                           <Icon isSelected={isSelected} />
                        </div>
                        <div className={styles.textWrap}>
                           <div>{choice.text}</div>
                           {choice.description && <div>{choice.description}</div>}
                        </div>
                     </div>
                  </div>
                  {choice.text === 'Write my own' && isSelected && (
                     <div>
                        <textarea
                           rows='6'
                           cols='60'
                           name='customChoice'
                           placeholder='Write your own'
                           onChange={handleCustomChoiceChange}
                           value={customChoiceText}
                        />
                        <button onClick={() => handleCustomChoiceSave(choice)}>
                           Save
                        </button>
                     </div>
                  )}
               </div>
            );
         })}
      </>
   );
};

export default Choices;
