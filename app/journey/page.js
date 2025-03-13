import { Section } from '@/app/components/layout';
import { Heading } from '@/app/components/typography';
import { Step, StepTracker } from '@/app/components/journey';
import styles from './page.module.css';

const Journey = () => {
   return (
      <div>
         <Section height='lg'>
            <Heading level='1'>Journey</Heading>
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
