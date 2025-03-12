import { Section } from '@/app/components/layout';
import { Step, StepTracker } from '@/app/components/journey';
import styles from './page.module.css';

const Journey = () => {
   return (
      <div>
         <Section height='lg' /*  width='sm' */>
            <h1>Journey</h1>
            <div className={styles.steps}>
               <div className={styles.step}>
                  <Step />
               </div>
               <div className={styles.tracker}>
                  <StepTracker />
               </div>
            </div>
         </Section>
      </div>
   );
};

export default Journey;
