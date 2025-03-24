import Link from 'next/link';
import styles from './Button.module.css';
import classNames from '@/utils/classNames';

const Button = ({
   children,
   name,
   onClick,
   href,
   variant = 'primary',
   size = 'md',
   disabled = false
}) =>
   href ? (
      <Link
         href={href}
         className={classNames(
            styles.button,
            styles[variant],
            styles[size],
            disabled && styles.disabled
         )}>
         {children}
      </Link>
   ) : (
      <button
         name={name || children}
         aria-label={name || children}
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

export default Button;
