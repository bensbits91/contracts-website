import styles from './List.module.css';

const List = ({ items, ordered = false, bottom = 'md' }) => {
   const Tag = ordered ? 'ol' : 'ul';
   const ListElement = (
      <Tag className={styles.list}>
         {items.map((item, index) => (
            <li key={index} className={styles.item}>{item}</li>
         ))}
      </Tag>
   );

   if (bottom) {
      return <div className={styles[`b_${bottom}`]}>{ListElement}</div>;
   }
   return ListElement;
};

export default List;
