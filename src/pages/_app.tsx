import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

import SiteLayout from '@/layout/SiteLayout';
import AuthManager from '@/components/AuthManager';

import '@/styles/globals.scss';
import { storeWrapper } from '@/redux/store';

const getDefaultLayout = (children: ReactNode) => {
  return <SiteLayout>{children}</SiteLayout>;
};

function App(props: AppProps) {
  const { Component, pageProps } = props;

  const renderLayout = () => {
    const children = <Component {...pageProps} />;
    const { getLayout = getDefaultLayout } =
      Component.pageOptions || {};

    return getLayout(children);
  };

  return (
    <>
      <AuthManager {...props}>{renderLayout()}</AuthManager>
    </>
  );
}

export default storeWrapper.withRedux(App);
