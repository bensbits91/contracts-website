import { useState, useEffect } from 'react';
import { Button, TextInput, Textarea } from '@/app/components/inputs';
import styles from './Form.module.css';

const Form = ({ fields, handleForm }) => {
   const [formData, setFormData] = useState({});
   const [isFormValid, setIsFormValid] = useState(false);

   // useEffect(() => {
   //    // Prefill form data with userInputs when the step changes
   //    if (fields) {
   //       const initialFormData = {};
   //       fields.forEach(field => {
   //          const lowercaseName = field.name.toLowerCase();
   //          if (lowercaseName !== 'next' && lowercaseName !== 'submit') {
   //             initialFormData[lowercaseName] = userInputs[lowercaseName] || '';
   //          }
   //       });
   //       setFormData(initialFormData);
   //    }
   // }, [fields, userInputs]);

   const handleInputChange = e => {
      const { name, value } = e.target;
      if (name !== 'submit') {
         setFormData(prevData => ({
            ...prevData,
            [name.toLowerCase()]: value
         }));
      }
   };

   useEffect(() => {
      if (fields) {
         const isValid = fields.every(field => {
            if (field.required) {
               const toCheck = formData[field.name.toLowerCase()]?.trim();
               const isValid = toCheck && toCheck !== '';
               return isValid;
            }
            return true;
         });
         setIsFormValid(isValid);
      }
   }, [formData, fields]);

   const handleSubmit = e => {
      e.preventDefault();
      handleForm(formData);
      // setFormData({});
   };

   return (
      <form className={styles.form} onSubmit={handleSubmit}>
         {fields.map((field, index) => (
            <div key={index}>
               {field.type == 'button' || field.type == 'submit' ? (
                  <Button type='submit' disabled={!isFormValid}>
                     {field.name}
                  </Button>
               ) : field.type == 'textarea' ? (
                  <Textarea
                     placeholder={field.placeholder}
                     label={field.label}
                     name={field.name}
                     value={formData[field.name.toLowerCase()] || ''}
                     required={field.required}
                     onChange={handleInputChange}
                  />
               ) : (
                  <TextInput
                     label={field.name}
                     type={field.type}
                     name={field.name}
                     value={formData[field.name.toLowerCase()] || ''}
                     required={field.required}
                     onChange={handleInputChange}
                  />
               )}
            </div>
         ))}
      </form>
   );
};

export default Form;
