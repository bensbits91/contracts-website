import styles from './Choices.module.css';
import classNames from '@/utils/classNames';

const Choices = ({ step, choices, handleChoice, selectedChoice }) => {
   return (
      <>
         {choices.map((choice, index) => {
            const isSelected = selectedChoice === choice.text;
            return (
               <div
                  key={index}
                  className={classNames(styles.choice, isSelected && styles.selected)}
                  onClick={() =>
                     handleChoice({
                        step,
                        choice
                     })
                  }>
                  <div>{choice.text}</div>
                  {choice.description && <div>{choice.description}</div>}
               </div>
            );
         })}
      </>
   );
};

export default Choices;
