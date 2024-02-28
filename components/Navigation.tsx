'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navlinks: NavLink[];
};

const Navigation = ({ navlinks }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {navlinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={pathname === link.href ? 'active' : ''}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export { Navigation };
