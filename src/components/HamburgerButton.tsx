import React from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PropsType = {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

const HamburgerButton: React.FC<PropsType> = (props) => {
  const { isOpen, setIsOpen } = props;

  let icon: React.ReactNode;
  if (isOpen) {
    icon = <FontAwesomeIcon icon={faTimes} size="lg" />;
  } else {
    icon = <FontAwesomeIcon icon={faBars} size="lg" />;
  }

  return (
    <button
      className="inline-flex items-center justify-center p-2 rounded-md w-8 h-8 text-latte hover:text-latteHover hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
      aria-expanded={isOpen}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="sr-only">Open main menu</span>
      {icon}
    </button>
  );
};

export default HamburgerButton;
