// NavLink.js
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ href, children, activeClassName, className , pathname }) => {
  
  // Check if the current route matches the NavLink
  const isActive = pathname === href;
  console.log(isActive)
  return (
    <Link href={href} className={`${className}${isActive ? activeClassName : ''} `}>
      {children}
    </Link>
  );
};

export default NavLink;
