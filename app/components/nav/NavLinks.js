import Link from 'next/link';

const NavLinks = ({ handleLinkClick = null }) => {
   const linkDefs = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Why', path: '/why' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Journey', path: '/journey' }
   ];

   return (
      <nav>
         <ul>
            {linkDefs.map(({ name, path }) => (
               <li key={name} onClick={handleLinkClick}>
                  <Link href={path}>{name}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default NavLinks;
