import { Button, Textarea } from '@/app/components/inputs';
import styles from './CustomChoice.module.css';

const CustomChoice = ({
   choice,
   customChoiceText,
   handleCustomChoiceChange,
   handleCustomChoiceSave
}) => {
   return (
      <div className={styles.wrap}>
         <Textarea
            name='customChoice'
            placeholder=''
            onChange={handleCustomChoiceChange}
            value={customChoiceText}
         />
         <Button onClick={() => handleCustomChoiceSave(choice)}>Save</Button>
      </div>
   );
};

export default CustomChoice;
