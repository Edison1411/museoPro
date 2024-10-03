import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{t('Welcome to the University Museum')}</h1>
        <p className="text-xl mb-4">
          {t('Explore our vast collection of historical artifacts and exhibitions.')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{t('Latest Exhibitions')}</h2>
            <p>{t('Check out our newest additions to the museum collection.')}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{t('Upcoming Events')}</h2>
            <p>{t('Join us for special events and guided tours.')}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{t('Educational Programs')}</h2>
            <p>{t('Learn about our educational initiatives for schools and universities.')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;