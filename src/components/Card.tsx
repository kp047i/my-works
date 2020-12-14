import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Card: React.FC = () => {
  const socialLinks = () => {
    const links = [
      {
        name: 'twitter',
        link: 'https://twitter.com/kp047i',
        icon: faTwitter,
      },
      {
        name: 'github',
        link: 'https://github.com/kp047i',
        icon: faGithub,
      },
    ];

    return links.map((link) => (
      <a
        href={link.link}
        key={link.name}
        className="text-latte mr-4 w-6 text-lg lg:w-8 h-6 lg:h-8"
      >
        <FontAwesomeIcon icon={link.icon} />
      </a>
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="mb-8">
        <img
          src="/avatar.png"
          alt="avator"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div className="text-latte tracking-wider mb-2">
        <h1 className="text-3xl mb-6">kappy </h1>
        <p className="text-lg lg:mb-2">Web Developer &</p>
        <p className="text-lg lg:mb-2">
          Student at Shibaura Insititute of Technology
        </p>
      </div>
      <div className="flex">{socialLinks()}</div>
    </div>
  );
};

export default Card;
