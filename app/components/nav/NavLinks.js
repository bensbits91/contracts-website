import Link from 'next/link';
import styles from './NavLinks.module.css';

const NavLinks = ({ handleLinkClick = null, isMobile = true }) => {
   const linkDefs = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Quote', path: '/quote' },
      { name: 'FAQ', path: '/faq' }
   ];

   return (
      <nav className={isMobile ? styles.mobileNav : styles.nav}>
         <ul className={styles.ul}>
            {linkDefs.map(({ name, path }) => (
               <li key={name} onClick={handleLinkClick}>
                  <Link className={styles.link} href={path}>
                     {name}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default NavLinks;
