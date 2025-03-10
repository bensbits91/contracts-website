import styles from './Section.module.css';
import classNames from '@/utils/classNames';

const Section = ({ children, width = 'm', height = 'm', bg = '' }) => {
   return (
      <div
         className={classNames(
            styles.section,
            height === 'sm' && styles.h_sm,
            height === 'lg' && styles.h_lg,
            bg === 'pop' && styles.bg_pop
         )}>
         <div
            className={classNames(
               styles.content,
               width === 'sm' && styles.w_sm,
               width === 'lg' && styles.w_lg
            )}>
            {children}
         </div>
      </div>
   );
};

export default Section;
