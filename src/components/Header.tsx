import React, { useState } from 'react';
import Link from 'next/link';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';

type LinkType = {
  link: string;
  href: string;
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links: LinkType[] = [
    {
      link: 'about',
      // href: '/about',
      href: '#',
    },
    {
      link: 'sketch',
      // href: '/sketch',
      href: '#',
    },
  ];
  const rightLinks = () => {
    return links.map((link) => (
      <Link href={link.href} key={link.link}>
        {/* TODO add cursor-pointer  */}
        <span className="text-xl text-gray-200 ml-8">{link.link}</span>
      </Link>
    ));
  };

  return (
    <header className="w-full tracking-wider">
      <nav className="py-4 lg:py-8">
        <div className="flex-auto flex-grow h-18 flex items-center justify-between">
          {/* left nav */}
          <Link href="/">
            <span className="cursor-pointer pl-2 text-xl text-latte hover:text-latteHover hover:bg-gray-700">
              kappy works
            </span>
          </Link>
          {/* right nav */}
          {/* mobile hamburger button */}
          <div>
            <div className="sm:hidden">
              <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div>
              <div className="hidden sm:block">{rightLinks()}</div>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <HamburgerMenu isOpen={isOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
