import NavLinks from './NavLinks';
import styles from './Nav.module.css';

const Nav = () => {
   return (
      <div className={styles.navWrap}>
         <NavLinks />
      </div>
   );
};

export default Nav;
