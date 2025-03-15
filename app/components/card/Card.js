import styles from './Card.module.css';
import { Heading } from '@/app/components/typography';
import classNames from '@/utils/classNames';

const Card = ({
   children,
   heading,
   headingLevel = '2',
   headingColor = 'blue',
   shadow = true
}) => (
   <div className={classNames(styles.card, shadow && styles.shadow)}>
      {heading && (
         <div className={styles.header}>
            <Heading level={headingLevel} color={headingColor}>
               {heading}
            </Heading>
         </div>
      )}
      <div className={styles.content}>{children}</div>
   </div>
);

export default Card;
