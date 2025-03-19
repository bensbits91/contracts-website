import styles from './Textarea.module.css';

const Textarea = ({
   name,
   value,
   onChange,
   required,
   placeholder,
   label = '',
   rows,
   cols
}) => {
   return (
      <div className={styles.wrap}>
         {label && (
            <label htmlFor={name.replace(' ', '-')} className={styles.label}>
               {label}
               {required && <span>*</span>}
            </label>
         )}
         <textarea
            className={styles.input}
            rows={rows || '4'}
            // cols={cols || '50'}
            id={name.replace(' ', '-')}
            name={name}
            value={value}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
         />
      </div>
   );
};

export default Textarea;
