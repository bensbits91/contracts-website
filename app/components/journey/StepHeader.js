import useJourneyStore from '@/app/store/useJourneyStore';
import { Toggle } from '@/app/components/misc';
import styles from './StepHeader.module.css';

const StepHeader = () => {
   const { currentStep, handleHelp, showHelp } = useJourneyStore();
   const { heading, description } = currentStep;

   return (
      <div className={styles.headWrap}>
         <div>
            <h2>{heading}</h2>
            <p>{description}</p>
         </div>
         <Toggle
            isOn={showHelp}
            offText='Show help'
            onText='Hide help'
            onChange={handleHelp}
         />
      </div>
   );
};

export default StepHeader;
