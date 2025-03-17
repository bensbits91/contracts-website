import styles from './Section.module.css';
import classNames from '@/utils/classNames';

const Section = ({
   children,
   width = 'md',
   height = 'md',
   top = 'md',
   bottom = 'md',
   bg = ''
}) => {
   return (
      <div
         className={classNames(
            styles.section,
            styles[`h_${height}`],
            styles[`t_${top}`],
            styles[`b_${bottom}`],
            styles[`bg_${bg}`]
         )}>
         <div className={classNames(styles.content, styles[`w_${width}`])}>
            {children}
         </div>
      </div>
   );
};

export default Section;
