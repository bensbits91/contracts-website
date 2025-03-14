import styles from './Toggle.module.css';

const Toggle = ({ isOn = false, offText = '', onText = '', onChange }) => (
   <div className={styles.toggle}>
      {isOn && onText && <span>{onText}</span>}
      {!isOn && offText && <span>{offText}</span>}
      <input
         className={styles.hiddenCheckbox}
         type='checkbox'
         id='switch'
         onChange={onChange}
      />
      <label className={styles.label} htmlFor='switch' />
   </div>
);

export default Toggle;
