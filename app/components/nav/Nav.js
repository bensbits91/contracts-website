import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
   return (
      <nav className={styles.nav}>
         <ul>
            <li>
               <Link href='/'>Home</Link>
            </li>
            <li>
               <Link href='/journey'>Journey</Link>
            </li>
            <li>
               <Link href='/about'>About</Link>
            </li>
            <li>
               <Link href='/why'>Why</Link>
            </li>
            <li>
               <Link href='/contact'>Contact</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
