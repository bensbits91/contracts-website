import { Button } from '@/app/components/misc';
import styles from './CustomChoice.module.css';

const CustomChoice = ({
   choice,
   customChoiceText,
   handleCustomChoiceChange,
   handleCustomChoiceSave
}) => {
   return (
      <div className={styles.wrap}>
         <textarea
            rows='4'
            cols='50'
            name='customChoice'
            placeholder='Write your own'
            onChange={handleCustomChoiceChange}
            value={customChoiceText}
         />
         <Button onClick={() => handleCustomChoiceSave(choice)}>Save</Button>
      </div>
   );
};

export default CustomChoice;
