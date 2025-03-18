import styles from './Overlay.module.css';
import classNames from '@/utils/classNames';

const Overlay = ({ shadow = false, hide = true, handleClick }) => {
   return (
      <div
         className={classNames(
            'overlay', // allows body:has(.overlay) in global css
            styles.overlay,
            shadow && styles.shadow,
            hide && styles.hide // used when animating the modal closing
         )}
         onClick={handleClick}
      />
   );
};

export default Overlay;
