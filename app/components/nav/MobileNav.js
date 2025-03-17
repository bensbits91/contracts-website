'use client';
import { useState } from 'react';
import { Button } from '@/app/components/inputs';
import { MobileNavIcon } from '@/app/components/icons';
import { Modal } from '@/app/components/modal';
import NavLinks from './NavLinks';
import styles from './MobileNav.module.css';

const MobileNav = () => {
   const [modalData, setModalData] = useState(null);
   const handleCloseModal = () => setModalData(null);

   const handleLinkClick = () => {
      setTimeout(() => {
         handleCloseModal();
      }, 300);
   };

   return (
      <div className={styles.mobileNav}>
         <div className={styles.buttonWrap}>
            <Button variant='clear' onClick={() => setModalData({ headingText: '' })}>
               <MobileNavIcon />
            </Button>
         </div>
         {modalData && (
            <Modal modalData={modalData} handleCloseModal={handleCloseModal}>
               <div className={styles.navWrap}>
                  <NavLinks handleLinkClick={handleLinkClick} />
               </div>
            </Modal>
         )}
      </div>
   );
};

export default MobileNav;
