import useJourneyStore from '@/app/store/useJourneyStore';
import { Button } from '@/app/components/misc';
import styles from './StepHeader.module.css';

const StepHeader = () => {
   const { currentStep, handleHelp } = useJourneyStore();
   const { heading, description } = currentStep;

   return (
      <div className={styles.headWrap}>
         <div>
            <h2>{heading}</h2>
            <p>{description}</p>
         </div>
         <Button onClick={handleHelp}>Help</Button>
      </div>
   );
};

export default StepHeader;
