import Link from 'next/link';
import { Button } from '@/app/components/inputs';
import { Heading } from '@/app/components/typography';
import styles from './Thanks.module.css';

const Thanks = ({ heading, content, buttons, links }) => {
   return (
      <div className={styles.thanks}>
         {heading && (
            <div className={styles.heading}>
               <Heading>{heading}</Heading>
            </div>
         )}
         {content && <div className={styles.content}>{content}</div>}
         {buttons && (
            <div className={styles.buttons}>
               {buttons.map((button, index) => (
                  <Button key={index} onClick={button.onClick}>
                     {button.text}
                  </Button>
               ))}
            </div>
         )}
         {links && (
            <div className={styles.links}>
               {links.map((link, index) =>
                  link.href ? (
                     <Link key={index} href={link.href}>
                        {link.text}
                     </Link>
                  ) : (
                     <div className={styles.clearLink} key={index}>
                        <Button variant='clear' onClick={link.onClick}>
                           {link.text}
                        </Button>
                     </div>
                  )
               )}
            </div>
         )}
      </div>
   );
};

export default Thanks;
