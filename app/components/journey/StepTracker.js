'use client';
import { useEffect, useRef } from 'react';
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
   const { initialize, currentStep, userChoices, userInputs, handleNavigate } =
      useJourneyStore();

   useEffect(() => {
      initialize();
   }, [initialize]);

   const stepRefs = useRef([]);
   useEffect(() => {
      const currentIndex = steps.indexOf(currentStep);
      if (stepRefs.current[currentIndex]) {
         stepRefs.current[currentIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
         });
      }
   }, [currentStep]);

   return (
      <div className={styles.stepTracker}>
         {steps.map((step, index) => {
            const { slug, showIf } = step;
            const isActive = slug === currentStep.slug;
            const userChoice = userChoices && userChoices[slug];
            const isContactFormCompleted = slug === 'contact' && userInputs?.email;
            const isStepCompleted =
               userChoice ||
               isContactFormCompleted ||
               (slug === 'submit' && currentStep.slug === 'end'); // make the submit step completed if the user is on the end step

            const isDisabled = slug === 'submit' && !userInputs?.email;

            const shouldHide = showIf
               ? !showIf.some(condition =>
                    condition.choiceText
                       ? userChoices[condition.stepSlug] === condition.choiceText
                       : userChoices.hasOwnProperty(condition.stepSlug)
                 )
               : slug === 'end'
               ? true
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

            const needsLineBelowIndex = steps.length - 2; // account for the last step being hidden

            // todo: move to string utils
            const getTextFromAnything = anything => {
               if (typeof anything === 'string') {
                  return anything;
               } else if (Array.isArray(anything)) {
                  return anything.join(', ');
               } else {
                  return Object.values(anything).join(', ');
               }
            };

            return (
               <div
                  key={index}
                  ref={el => (stepRefs.current[index] = el)}
                  className={classNames(styles.step, isDisabled && styles.disabled)}
                  onClick={isDisabled ? null : () => handleNavigate(step)}>
                  <div className={styles.stepContent}>
                     <div
                        className={classNames(
                           styles.stepIcon,
                           isActive && styles.active,
                           isStepCompleted && !isActive && styles.completed
                        )}>
                        <StepIcon />
                     </div>
                     <div className={styles.stepTextWrap}>
                        <div
                           className={classNames(
                              styles.stepText,
                              isActive && styles.activeStepText
                           )}>
                           {step.heading}
                        </div>
                        {userChoice && (
                           <div
                              className={classNames(
                                 styles.stepChoice,
                                 isActive && styles.activeStepChoice
                              )}>
                              <div>{getTextFromAnything(userChoice)}</div>
                              {!isActive && (
                                 <div className={styles.stepChoiceIcon}>
                                    <PencilIcon />
                                 </div>
                              )}
                           </div>
                        )}
                     </div>
                  </div>
                  {index < needsLineBelowIndex && <div className={styles.stepLine}></div>}
               </div>
            );
         })}
      </div>
   );
};

export default StepTracker;
