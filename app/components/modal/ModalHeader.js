import { Heading } from '@/app/components/typography';
import { Button } from '@/app/components/inputs';
import { CloseIcon } from '@/app/components/icons';
import styles from './ModalHeader.module.css';

const ModalHeader = ({ headingText, handleClose }) => {
   return (
      <div className={styles.header}>
         <Heading level='1'>{headingText}</Heading>
         <div>
            <Button variant='clear' onClick={handleClose}>
               <CloseIcon />
            </Button>
         </div>
      </div>
   );
};

export default ModalHeader;
