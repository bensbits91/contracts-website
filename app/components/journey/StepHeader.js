import useJourneyStore from '@/app/store/useJourneyStore';
import { Heading } from '@/app/components/typography';
import { Toggle } from '@/app/components/inputs';
import styles from './StepHeader.module.css';

const StepHeader = () => {
   const { currentStep, handleHelp, showHelp } = useJourneyStore();
   const { heading, description, hasHelp = true } = currentStep;

   return (
      <div className={styles.headWrap}>
         <div className={styles.textWrap}>
            <Heading level='2' color='blue'>{heading}</Heading>
            <p>{description}</p>
         </div>
         {hasHelp && (
            <div className={styles.toggleWrap}>
               <Toggle
                  isOn={showHelp}
                  offText='Show help'
                  onText='Hide help'
                  onChange={handleHelp}
               />
            </div>
         )}
      </div>
   );
};

export default StepHeader;
