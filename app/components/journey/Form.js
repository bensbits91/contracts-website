import { useState, useEffect } from 'react';
import useJourneyStore from '@/app/store/useJourneyStore';
import { Button } from '@/app/components/misc';

const Form = () => {
   const { currentStep, userInputs, handleForm } = useJourneyStore();
   const { form, nextSlug } = currentStep;

   const [formData, setFormData] = useState({});
   const [isFormValid, setIsFormValid] = useState(false);

   useEffect(() => {
      // Prefill form data with userInputs when the step changes
      if (form) {
         const initialFormData = {};
         form.forEach(field => {
            const lowercaseName = field.name.toLowerCase();
            if (lowercaseName !== 'next' && lowercaseName !== 'submit') {
               initialFormData[lowercaseName] = userInputs[lowercaseName] || '';
            }
         });
         setFormData(initialFormData);
      }
   }, [form, userInputs]);

   const handleInputChange = e => {
      const { name, value } = e.target;
      if (name !== 'next' && name !== 'submit') {
         setFormData(prevData => ({
            ...prevData,
            [name.toLowerCase()]: value
         }));
      }
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
               {field.type == 'button' || field.type == 'submit' ? (
                  <Button type='submit' disabled={!isFormValid}>
                     {field.name}
                  </Button>
               ) : field.type == 'textarea' ? (
                  <textarea
                     rows='6'
                     cols='60'
                     name={field.name}
                     value={formData[field.name.toLowerCase()] || ''}
                     required={field.required}
                     onChange={handleInputChange}
                  />
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
