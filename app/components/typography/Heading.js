import styles from './Heading.module.css';
import classNames from '@/utils/classNames';

const Heading = ({ children, level = '2', color, top = 'no', bottom = 'sm' }) => {
   const Tag = `h${level}`;

   const H = (
      <Tag className={classNames(styles[Tag], color && styles[color])}>{children}</Tag>
   );

   if (top || bottom) {
      return (
         <div
            className={classNames(
               top && styles[`t_${top}`],
               bottom && styles[`b_${bottom}`]
            )}>
            {H}
         </div>
      );
   }

   return H;
};

export default Heading;
