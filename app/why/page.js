import { Section } from '@/app/components/layout';
import { Heading } from '@/app/components/typography';
import { Card } from '@/app/components/card';
import { why } from '@/app/data/why';
import styles from './page.module.css';

const Why = () => {
   return (
      <>
         <Section bottom='sm'>
            <Heading level='1'>Why choose Ben?</Heading>
         </Section>
         <Section height='sm'>
            <div className={styles.grid}>
               {why.map((item, index) => (
                  <Card key={index} heading={item.heading} headingLevel='2'>
                     {typeof item.content === 'string' ? (
                        <p>{item.content}</p>
                     ) : (
                        <ul className={styles.ul}>
                           {item.content.map((content, index) => (
                              <li key={index}>{content}</li>
                           ))}
                        </ul>
                     )}
                  </Card>
               ))}
            </div>
         </Section>
      </>
   );
};

export default Why;
