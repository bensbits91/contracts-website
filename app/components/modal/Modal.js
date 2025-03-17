import { useEffect, useState } from 'react';
import ModalHeader from './ModalHeader';
import ModalMenu from './ModalMenu';
// import ModalEditables from './ModalEditables';
import ModalImage from './ModalImage';
// import ModalDetails from './ModalDetails';
import { Overlay } from '@/app/components//overlay';
import styles from './Modal.module.css';
import classNames from '@/utils/classNames';

const Modal = ({
   children,
   modalData,
   actions = null,
   handleCloseModal,
   handleEdit = null
}) => {
   const [isVisible, setIsVisible] = useState(false);
   const [isClosing, setIsClosing] = useState(false);

   useEffect(() => {
      if (modalData) {
         setIsVisible(true);
      } else {
         setIsClosing(true);
      }
   }, [modalData]);

   if (!modalData && !isClosing) return null;

   const { headingText = 'asdf', img = null } = modalData || {};

   const handleClose = () => {
      setIsClosing(true);
      setTimeout(() => {
         handleCloseModal();
      }, 300);
   };

   // const handleRatingEdit = newRating => {
   //    if (handleEdit) {
   //       const newItem = { ...modalData, rating: newRating };
   //       handleEdit(newItem);
   //    }
   // };

   // const handleStatusEdit = selectedStatus => {
   //    if (handleEdit) {
   //       const newItem = { ...modalData, status: selectedStatus.value };
   //       handleEdit(newItem);
   //    }
   // };

   // const handleTimesEdit = newTimes => {
   //    if (handleEdit) {
   //       const newItem = { ...modalData, times: newTimes };
   //       handleEdit(newItem);
   //    }
   // };

   return (
      <>
         <Overlay shadow hide={isClosing} handleClick={handleClose} />
         <div
            className={classNames(
               styles.modal,
               isVisible && 'hasOverlay',
               'willAppearFromBottom',
               isVisible && !isClosing && 'slideUpShow',
               isClosing && 'slideDownHide'
            )}>
            <ModalHeader headingText={headingText} handleClose={handleClose} />
            <div className={styles.content}>
               <div className={styles.hero}>
                  {img && <ModalImage imgUrl={img} altText={name} />}
                  {actions && (
                     /* actions.length && */ <div>
                        <ModalMenu actions={actions} />
                        {/* {userHasThing && (
                        <ModalEditables
                           rating={rating}
                           status={status}
                           times={times}
                           statusOptions={statusOptions}
                           handleRatingEdit={handleRatingEdit}
                           handleStatusEdit={handleStatusEdit}
                           handleTimesEdit={handleTimesEdit}
                        />
                     )} */}
                        {/* <ModalDetails
                        type={type}
                        country={country}
                        language={language}
                        date={date}
                        genres={genres}
                        description={description}
                     /> */}
                     </div>
                  )}
                  <div className={styles.main}>{children}</div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Modal;
