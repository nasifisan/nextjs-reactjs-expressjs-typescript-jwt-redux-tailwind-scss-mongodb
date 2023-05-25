import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

import Header from './Header';
import Footer from './Footer';
import { headerLessRoutes } from '@/constants/RoutePaths';

const SiteLayout = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();

  return (
    <>
      {headerLessRoutes.includes(router.pathname) ? (
        <></>
      ) : (
        <Header />
      )}
      <main>{children}</main>
      {headerLessRoutes.includes(router.pathname) ? (
        <></>
      ) : (
        <Footer />
      )}
    </>
  );
};

export default SiteLayout;
