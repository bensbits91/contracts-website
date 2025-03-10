// 'use client';
// import { useState, useEffect } from 'react';
import Form from './Form';
import Choices from './Choices';

const Step = ({ step, handleChoice, handleForm, selectedChoice, userInputs }) => {
   console.log('bb ~ Step.js:7 ~ Step ~ selectedChoice:', selectedChoice);
   const {
      heading,
      description,
      nextSlug, // for forms
      form,
      choices
   } = step;
   //    const [formData, setFormData] = useState({});
   //    const [isFormValid, setIsFormValid] = useState(false);

   //    const handleInputChange = e => {
   //       const { name, value } = e.target;
   //       setFormData(prevData => ({
   //          ...prevData,
   //          [name.toLowerCase()]: value
   //       }));
   //    };

   //    useEffect(() => {
   //       if (form) {
   //          const isValid = form.every(field => {
   //             if (field.required) {
   //                const toCheck = formData[field.name.toLowerCase()]?.trim();
   //                const isValid = toCheck && toCheck !== '';
   //                return isValid;
   //             }
   //             return true;
   //          });
   //          setIsFormValid(isValid);
   //       }
   //    }, [formData, form]);

   //    const handleSubmit = e => {
   //       e.preventDefault();
   //       handleForm({ formData, nextSlug });
   //       setFormData({});
   //    };

   return (
      <div>
         <h2>{heading}</h2>
         <p>{description}</p>
         {form && (
            <Form
               form={form}
               userInputs={userInputs}
               //    handleInputChange={handleInputChange}
               //    isFormValid={isFormValid}
               //    handleSubmit={handleSubmit}
               handleForm={handleForm}
               nextSlug={nextSlug}
            />
         )}
         {choices && (
            <Choices
               step={step}
               choices={choices}
               handleChoice={handleChoice}
               selectedChoice={selectedChoice}
            />
         )}
      </div>
   );
};

export default Step;
