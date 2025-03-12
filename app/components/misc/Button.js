import styles from './Button.module.css';
import classNames from '@/utils/classNames';

const Button = ({
   children,
   onClick,
   variant = 'primary',
   size = 'md',
   disabled = false
}) => {
   return (
      <button
         className={classNames(
            styles.button,
            styles[variant],
            styles[size],
            disabled && styles.disabled
         )}
         onClick={onClick}
         disabled={disabled}>
         {children}
      </button>
   );
};

export default Button;
