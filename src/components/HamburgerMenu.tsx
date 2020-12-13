import React from 'react';
import Link from 'next/link';

type PropsType = {
  isOpen: boolean;
};

type LinkType = {
  link: string;
  href: string;
};

const HamburgerMenu: React.FC<PropsType> = (props) => {
  const { isOpen } = props;

  const links: LinkType[] = [
    {
      link: 'about',
      href: '/about',
    },
    {
      link: 'sketch',
      href: '/sketch',
    },
  ];

  const menu = links.map((link) => (
    <div
      className={`w-full mt-2 pl-2 rounded-lg text-lg text-latte hover:text-latteHover hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-latteHover',
        ${!isOpen && 'hidden'}`}
      key={link.link}
    >
      <Link href={link.href}>
        <span>{link.link}</span>
      </Link>
    </div>
  ));

  return <>{menu}</>;
};

export default HamburgerMenu;
