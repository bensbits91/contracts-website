'use client';
import useJourneyStore from '@/app/store/useJourneyStore';
import {
   CircleIcon,
   CircleCaratIcon,
   CircleCheckIcon,
   PencilIcon
} from '@/app/components/icons';
import { steps } from '@/app/data/steps';
import styles from './StepTracker.module.css';
import classNames from '@/utils/classNames';

const StepTracker = () => {
   const { currentStep, userChoices, userInputs, handleNavigate } = useJourneyStore();

   return (
      <div className={styles.stepTracker}>
         {steps.map((step, index) => {
            const { slug, showIf } = step;
            const isActive = slug === currentStep.slug;
            const userChoice = userChoices && userChoices[slug];
            const isContactFormCompleted = slug === 'contact' && userInputs?.email;
            const isStepCompleted = userChoice || isContactFormCompleted;

            const shouldHide = showIf
               ? userChoices[showIf.stepSlug] !== showIf.choiceText
               : false;

            if (shouldHide) {
               return null; // todo: if user selects a choice that shows a step, fills in data, then goes back and changes to hide that step, the data should be cleared
            }

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
