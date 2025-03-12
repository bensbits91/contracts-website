import { useState } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import ChoiceHelp from './ChoiceHelp';
import { CircleIcon, CircleCheckIcon } from '@/app/components/icons';
import styles from './Choice.module.css';
import classNames from '@/utils/classNames';

const Choice = ({ choice, isSelected, handleChoiceClick }) => {
   const { showHelp } = useJourneyStore();
   const [isHovered, setIsHovered] = useState(false);

   const Icon = ({ isSelected }) => {
      if (isSelected) {
         return <CircleCheckIcon />;
      } else {
         return <CircleIcon />;
      }
   };

   return (
      <div
         className={classNames(styles.choice, isSelected && styles.selected)}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
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
         {showHelp && (choice.pros || choice.cons || choice.moreInfo) && (
            <ChoiceHelp choice={choice} isHovered={isHovered} isSelected={isSelected} />
         )}
      </div>
   );
};

export default Choice;
