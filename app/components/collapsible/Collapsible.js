'use client';
import { useState, useEffect } from 'react';
import { CircleCaratIcon } from '../icons';
import { MdClient } from '@/app/components/markdown';
import styles from './Collapsible.module.css';
import classNames from '@/utils/classNames';

const Collapsible = ({
   title,
   content,
   isOpen: externalIsOpen, // enables parent component to control open state while still allowing collapsible to be toggled without parent intervention
   onToggle
}) => {
   const [isOpen, setIsOpen] = useState(externalIsOpen || false);

   const toggle = () => {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      if (onToggle) {
         onToggle(newIsOpen);
      }
   };

   useEffect(() => {
      if (externalIsOpen !== undefined) {
         setIsOpen(externalIsOpen);
      }
   }, [externalIsOpen]);

   return (
      <div
         className={classNames(styles.collapsible, isOpen && styles.open)}
         onClick={toggle}>
         <div className={styles.title}>
         <div className={styles.text}>{title}</div>
            <div className={styles.iconWrap}>
               <CircleCaratIcon />
            </div>
         </div>
         <div className={styles.content}>
            <MdClient>{content}</MdClient>
         </div>
      </div>
   );
};

export default Collapsible;
