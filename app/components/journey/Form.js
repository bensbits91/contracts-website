'use client';
import { useState, useEffect } from 'react';

const Form = ({ form, userInputs, handleForm, nextSlug }) => {
   const [formData, setFormData] = useState({});
   const [isFormValid, setIsFormValid] = useState(false);

   useEffect(() => {
      // Prefill form data with userInputs when the step changes
      if (form) {
         const initialFormData = {};
         form.forEach(field => {
            initialFormData[field.name.toLowerCase()] =
               userInputs[field.name.toLowerCase()] || '';
         });
         setFormData(initialFormData);
      }
   }, [form, userInputs]);

   const handleInputChange = e => {
      const { name, value } = e.target;
      setFormData(prevData => ({
         ...prevData,
         [name.toLowerCase()]: value
      }));
   };

   useEffect(() => {
      if (form) {
         const isValid = form.every(field => {
            if (field.required) {
               const toCheck = formData[field.name.toLowerCase()]?.trim();
               const isValid = toCheck && toCheck !== '';
               return isValid;
            }
            return true;
         });
         setIsFormValid(isValid);
      }
   }, [formData, form]);

   const handleSubmit = e => {
      e.preventDefault();
      handleForm({ formData, nextSlug });
      setFormData({});
   };

   return (
      <form onSubmit={handleSubmit}>
         {form.map((field, index) => (
            <div key={index}>
               {field.type == 'button' ? (
                  <button type='submit' disabled={!isFormValid}>
                     {field.name}
                  </button>
               ) : (
                  <label>
                     {field.name}
                     {field.required && <span>*</span>}
                     <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name.toLowerCase()] || ''}
                        required={field.required}
                        onChange={handleInputChange}
                     />
                  </label>
               )}
            </div>
         ))}
      </form>
   );
};

export default Form;
