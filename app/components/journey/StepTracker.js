import {
   CircleIcon,
   CircleCaratIcon,
   CircleCheckIcon,
   PencilIcon
} from '@/app/components/icons';
import { steps } from '@/app/data/steps';
import styles from './StepTracker.module.css';
import classNames from '@/utils/classNames';

const StepTracker = ({ currentStep, userChoices, userInputs, handleNavigate }) => {
   console.log('bb ~ StepTracker.js:12 ~ StepTracker ~ userInputs:', userInputs);
   return (
      <div className={styles.stepTracker}>
         {steps.map((step, index) => {
            const isActive = step.slug === currentStep.slug;
            const userChoice = userChoices[step.slug];
            const isFormCompleted = step.slug === 'contact' && userInputs.email;
            const isStepCompleted = userChoice || isFormCompleted;

            const StepIcon = () =>
               isActive ? (
                  <CircleCaratIcon />
               ) : isStepCompleted ? (
                  <CircleCheckIcon />
               ) : (
                  <CircleIcon />
               );

            return (
               <div
                  key={index}
                  className={styles.step}
                  onClick={() => handleNavigate(step)}>
                  <div className={styles.stepContent}>
                     <div
                        className={classNames(
                           styles.stepIcon,
                           isActive && styles.active,
                           isStepCompleted && !isActive && styles.completed
                        )}>
                        <StepIcon />
                     </div>
                     <div className={styles.stepText}>{step.heading}</div>
                     {/* {isActive && <div>Active</div>} */}
                     {userChoice && (
                        <div className={styles.stepChoice}>
                           {userChoice}{' '}
                           {!isActive && (
                              <div className={styles.stepChoiceIcon}>
                                 <PencilIcon />
                              </div>
                           )}
                        </div>
                     )}
                  </div>
                  {index < steps.length - 1 && <div className={styles.stepLine}></div>}
               </div>
            );
         })}
      </div>
   );
};

export default StepTracker;
