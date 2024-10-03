import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">{t('University Museum')}</a>
        </Link>
        <div className="space-x-4">
          <Link href="/"><a>{t('Home')}</a></Link>
          <Link href="/catalog"><a>{t('Catalog')}</a></Link>
          <Link href="/about"><a>{t('About')}</a></Link>
          {session ? (
            <>
              <Link href="/admin"><a>{t('Admin')}</a></Link>
              <button onClick={() => signOut()}>{t('Sign Out')}</button>
            </>
          ) : (
            <Link href="/api/auth/signin"><a>{t('Sign In')}</a></Link>
          )}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;