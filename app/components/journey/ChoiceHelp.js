import { Help } from '@/app/components/help';
import styles from './ChoiceHelp.module.css';
import classNames from '@/utils/classNames';

const ChoiceHelp = ({ choice, isHovered, isSelected }) => {
   if (!choice || (!choice.pros && !choice.cons && !choice.moreInfo)) {
      return null;
   }
   return (
      <div
         className={classNames(
            styles.help,
            isHovered && styles.hovered,
            isSelected && styles.selected
         )}>
         {choice.moreInfo && (
            <Help
               text={choice.moreInfo}
               isParentHovered={isHovered}
               isParentSelected={isSelected}
            />
         )}
         {(choice.pros || choice.cons) && (
            <div className={styles.prosCons}>
               {choice.pros && (
                  <div className={styles.pros}>
                     <div className={styles.head}>Pros</div>
                     <ul className={styles.ul}>
                        {choice.pros.map((pro, index) => (
                           <li key={index}>{pro}</li>
                        ))}
                     </ul>
                  </div>
               )}
               {choice.cons && (
                  <div className={styles.cons}>
                     <div className={styles.head}>Cons</div>
                     <ul className={styles.ul}>
                        {choice.cons.map((con, index) => (
                           <li key={index}>{con}</li>
                        ))}
                     </ul>
                  </div>
               )}
            </div>
         )}
      </div>
   );
};

export default ChoiceHelp;
