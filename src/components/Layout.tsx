import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="bg-navy min-h-screen">
      <div className="container max-w-screen-md mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
