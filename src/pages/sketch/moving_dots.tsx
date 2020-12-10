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
        <div className="flex justify-center border-gray-200">
          <AviodSSRComponent />
        </div>
      </div>
    </Layout>
  );
};

export default MovingDotsPage;
