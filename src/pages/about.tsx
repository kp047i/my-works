import React from 'react';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="tracking-widest text-xl text-latte mt-8">
        <h1 className="text-4xl">About</h1>
        <div className="mt-16">
          <h2 className="text-3xl">基本情報</h2>
          <p className="mt-8">
            芝浦工業大学大学院修士1年の三浦鷹将(みうらたかゆき)です。
          </p>
          <p className="mt-4">宮城県の南三陸町出身です。</p>
          <p className="mt-4">
            主にNuxt.jsやNext.jsを用いたフロントエンド開発をしています。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
