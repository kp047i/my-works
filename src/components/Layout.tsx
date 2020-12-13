import React from 'react';

import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="bg-navy min-h-screen">
      <div className="container max-w-screen-md mx-auto px-8 md:px-12">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
