import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('Contact Us')}</h3>
          <p>{t('University Museum')}</p>
          <p>{t('123 Museum Street')}</p>
          <p>{t('City, State 12345')}</p>
          <p>{t('Phone')}: (123) 456-7890</p>
          <p>{t('Email')}: info@universitymuseum.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('Opening Hours')}</h3>
          <p>{t('Tuesday - Sunday')}: 10 AM - 5 PM</p>
          <p>{t('Closed on Mondays and major holidays')}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('Follow Us')}</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} {t('University Museum. All rights reserved.')}</p>
      </div>
    </footer>
  );
};

export default Footer;