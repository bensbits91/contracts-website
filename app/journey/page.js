import { Section } from '@/app/components/layout';
import { Step, StepTracker } from '@/app/components/journey';

const Journey = () => {
   return (
      <div>
         <Section height='lg' width='sm'>
            <h1>Journey</h1>
            <Step />
            <StepTracker />
         </Section>
      </div>
   );
};

export default Journey;
