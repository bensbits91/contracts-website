import styles from './Textarea.module.css';

const Textarea = ({ name, value, onChange, required, placeholder, rows, cols }) => {
   return (
      <div className={styles.wrap}>
         <textarea
            className={styles.input}
            rows={rows || '4'}
            cols={cols || '50'}
            placeholder={placeholder}
            name={name}
            value={value}
            required={required}
            onChange={onChange}
         />
      </div>
   );
};

export default Textarea;
