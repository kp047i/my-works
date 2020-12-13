import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../components/Layout';

const AviodSSRComponent = dynamic(
  () => import('../../sketch/MovingDots/index'),
  {
    ssr: false,
  },
);

const MovingDotsPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-80">
        <div className="flex flex-col items-center w-hull">
          <h1 className="text-5xl text-latte pb-80">MovingDots</h1>
          <div className="">
            <AviodSSRComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovingDotsPage;
