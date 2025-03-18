'use client';
import { useState } from 'react';
import { Overlay } from '@/app/components/overlay';
import { QuestionIcon } from '@/app/components/icons';
import styles from './Help.module.css';
import classNames from '@/utils/classNames';

const Help = ({
   text,
   showText = true,
   size = 'md',
   isParentHovered,
   isParentSelected
}) => {
   const [showHiddenText, setShowHiddenText] = useState(false);
   const toggleHiddenText = () => setShowHiddenText(!showHiddenText);

   return (
      <>
         {showHiddenText && (
            <Overlay shadow={true} hide={false} handleClick={toggleHiddenText} />
         )}
         <div
            onClick={() => (showText ? null : toggleHiddenText())}
            title={showText ? null : text}
            className={classNames(
               styles.help,
               styles[size],
               isParentHovered && styles.hovered,
               isParentSelected && styles.selected,
               !showText && styles.clickable
            )}>
            <div className={styles.iconWrap}>
               <QuestionIcon />
            </div>
            <div
               className={classNames(
                  showText ? styles.textWrap : styles.hiddenText,
                  showHiddenText && styles.visible
               )}>
               {text}
            </div>
         </div>
      </>
   );
};

export default Help;
