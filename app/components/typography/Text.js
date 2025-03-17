import styles from './Text.module.css';
import classNames from '@/utils/classNames';

const Text = ({ string, top = 'no', bottom = 'sm', variant }) => {
   const P = (
      <p className={classNames(styles.text, variant && styles[variant])}>{string}</p>
   );

   if (top || bottom) {
      return (
         <div
            className={classNames(
               top && styles[`t_${top}`],
               bottom && styles[`b_${bottom}`]
            )}>
            {P}
         </div>
      );
   }

   return P;
};

export default Text;
