import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Card from '../components/Card';

const AviodSSRComponent = dynamic(() => import('../components/SketchWrapper'), {
  ssr: false,
});

const IndexPage: React.FC = () => {
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setClientWidth(document.getElementById('p5canvas').clientWidth);
    });

    return () =>
      window.removeEventListener('resize', () => {
        setClientWidth(document.getElementById('p5canvas').clientWidth);
      });
  });

  return (
    <Layout>
      <div className="mt-8">
        <Card />
        <div className="flex justify-center mt-8" id="p5canvas">
          <AviodSSRComponent clientWidth={clientWidth} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
