import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../components/Layout';

const AviodSSRComponent = dynamic(
  () => import('../../sketches/Ichimatsu'),
  {
    ssr: false,
  },
);

const SketchPages: React.FC = () => {
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
        <div className="flex justify-center mt-8" id="p5canvas">
          <AviodSSRComponent clientWidth={clientWidth} />
        </div>
      </div>
    </Layout>
  );
};

export default SketchPages;
