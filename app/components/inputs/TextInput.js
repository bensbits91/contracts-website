import styles from './TextInput.module.css';

const TextInput = ({ label, type, name, value, required, placeholder, onChange }) => (
   <div className={styles.inputWrap}>
      <label className={styles.label}>
         {label}
         {required && <span>*</span>}
      </label>
      <input
         className={styles.input}
         type={type}
         name={name}
         value={value}
         required={required}
         placeholder={placeholder || required ? 'Required' : ''}
         onChange={onChange}
      />
   </div>
);

export default TextInput;
