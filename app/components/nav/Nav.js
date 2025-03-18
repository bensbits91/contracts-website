import NavLinks from './NavLinks';
import styles from './Nav.module.css';

const Nav = () => {
   return (
      <div className={styles.navWrap}>
         <NavLinks isMobile={false} />
      </div>
   );
};

export default Nav;
