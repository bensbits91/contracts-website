import { Heading, Text } from '@/app/components/typography';
import styles from './EndStep.module.css';

const EndStep = ({ step }) => {
   const { heading, description, whatsNext } = step;

   return (
      <div className={styles.step}>
         <Heading level='2' color='blue'>
            {heading}
         </Heading>
         <p>{description}</p>
         {whatsNext && (
            <div className={styles.whatsNext}>
               <Heading level='3' top='lg'>
                  What&apos;s next?
               </Heading>
               <Text top='md'>{whatsNext}</Text>
            </div>
         )}
         {/* <div>links and icons and such</div> */}
      </div>
   );
};

export default EndStep;
