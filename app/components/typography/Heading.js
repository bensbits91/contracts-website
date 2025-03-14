import styles from './Heading.module.css';
import classNames from '@/utils/classNames';

const Heading = ({ children, level, color }) => {
   const Tag = `h${level}`;
   return (
      <Tag className={classNames(styles[Tag], color && styles[color])}>{children}</Tag>
   );
};

export default Heading;
