'use client';
import { useEffect, useState } from 'react';
import Collapsible from './Collapsible';
import { Heading } from '@/app/components/typography';
import { TextInput, Toggle } from '@/app/components/inputs';
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

   useEffect(() => {
      if (searchTerm) {
         const newFilteredItems = collapsibleItems.filter(item => {
            return item.q.toLowerCase().includes(searchTerm.toLowerCase());
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

   return (
      <div className={styles.accordion}>
         <div className={styles.headWrap}>
            <div className={styles.textWrap}>
               <Heading level='2' color='blue'>
                  Frequently Asked Questions
               </Heading>
               <p>Some frequently asked questions :)</p>
            </div>
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
         {filteredItems.map((item, index) => {
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
   );
};

export default Accordion;
