'use client';
import { useEffect, useState } from 'react';
import Collapsible from './Collapsible';
import { Heading } from '@/app/components/typography';
import { Button, TextInput, Toggle } from '@/app/components/inputs';
import { Modal } from '@/app/components/modal';
import { Form } from '@/app/components/form';
import { Thanks } from '@/app/components/thanks';
import styles from './Accordion.module.css';

const Accordion = ({ collapsibleItems }) => {
   const [allOpen, setAllOpen] = useState(false);
   const [openItems, setOpenItems] = useState({});
   const toggleAll = () => {
      const newOpenItems = {};
      collapsibleItems.forEach((item, index) => {
         newOpenItems[index] = !allOpen;
      });
      setAllOpen(!allOpen);
      setOpenItems(newOpenItems);
   };

   const [searchTerm, setSearchTerm] = useState('');
   const [filteredItems, setFilteredItems] = useState(collapsibleItems);
   const handleSearch = e => setSearchTerm(e.target.value);

   const [modalData, setModalData] = useState(null);
   const handleCloseModal = () => setModalData(null);

   useEffect(() => {
      if (searchTerm) {
         const newFilteredItems = collapsibleItems.filter(item => {
            return JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
         });
         setFilteredItems(newFilteredItems);
      } else {
         setFilteredItems(collapsibleItems);
      }
   }, [searchTerm]);

   const toggleItem = index => {
      setOpenItems(prevState => {
         const newOpenItems = {
            ...prevState,
            [index]: !prevState[index]
         };
         setAllOpen(Object.values(newOpenItems).every(isOpen => isOpen));
         return newOpenItems;
      });
   };

   useEffect(() => {
      // ensures toggle is updated if all items are toggled individually
      setAllOpen(
         Object.values(openItems).length === collapsibleItems.length &&
            Object.values(openItems).every(isOpen => isOpen)
      );
   }, [openItems, collapsibleItems.length]);

   const handleQuestionSubmit = formData => {
      console.log('formData', formData);
      // send to server
      // if success,
      setModalData({ headingText: 'Thanks!', hasForm: false });
   };

   const handleAskAnotherQuestion = () => {
      setModalData({ headingText: 'Ask another question', hasForm: true });
   };

   return (
      <>
         <div className={styles.accordion}>
            <Heading level='2' color='blue'>
               Frequently Asked Questions
            </Heading>
            <div className={styles.toolbar}>
               {/* <div className={styles.textWrap}>
               <p>Some frequently asked questions :)</p>
            </div> */}
               <div className={styles.controls}>
                  <div className={styles.searchWrap}>
                     <TextInput
                        label='Search'
                        type='search'
                        name='search'
                        required={false}
                        placeholder='Search'
                        onChange={handleSearch}
                     />
                  </div>
                  <div className={styles.toggleWrap}>
                     <Toggle
                        isOn={allOpen}
                        offText='Open all'
                        onText='Close all'
                        onChange={toggleAll}
                     />
                  </div>
               </div>
               <div className={styles.buttonWrap}>
                  <Button
                     onClick={() =>
                        setModalData({ headingText: 'Ask a new question', hasForm: true })
                     }>
                     Ask a new question
                  </Button>
               </div>
            </div>
            {filteredItems.map(item => {
               const { q, a } = item;
               const originalIndex = collapsibleItems.indexOf(item);
               return (
                  <div key={originalIndex}>
                     <Collapsible
                        title={q}
                        content={a}
                        isOpen={openItems[originalIndex] || false}
                        onToggle={() => toggleItem(originalIndex)}
                     />
                  </div>
               );
            })}
         </div>
         {modalData && (
            <Modal
               modalData={modalData}
               //    actions={modalActions}
               handleCloseModal={handleCloseModal}>
               {modalData.hasForm ? (
                  <Form
                     fields={[
                        {
                           type: 'email',
                           name: 'Your email',
                           required: true
                        },
                        {
                           type: 'textarea',
                           label: 'Your question',
                           placeholder: 'Type your question here',
                           name: 'Your question',
                           required: true
                        },
                        {
                           name: 'Submit',
                           type: 'submit'
                        }
                     ]}
                     handleForm={handleQuestionSubmit}
                  />
               ) : (
                  <Thanks
                     content='Thanks for your question!'
                     buttons={[
                        {
                           text: 'Ask another question',
                           onClick: handleAskAnotherQuestion
                        },
                        { text: 'Done', onClick: handleCloseModal }
                     ]}
                  />
               )}
            </Modal>
         )}
      </>
   );
};

export default Accordion;
