import styles from './List.module.css';
import classNames from '@/utils/classNames';

const List = ({ items, ordered = false, bottom = 'md', inverted = false }) => {
   const Tag = ordered ? 'ol' : 'ul';
   const ListElement = (
      <Tag className={classNames(styles.list, inverted && styles.inverted)}>
         {items.map((item, index) => (
            <li key={index} className={styles.item}>
               {item}
            </li>
         ))}
      </Tag>
   );

   if (bottom) {
      return <div className={styles[`b_${bottom}`]}>{ListElement}</div>;
   }
   return ListElement;
};

export default List;
