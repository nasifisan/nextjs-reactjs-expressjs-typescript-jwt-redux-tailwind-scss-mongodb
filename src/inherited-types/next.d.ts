import { ReactNode } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';

type LayoutConfig = {
  requireHeader?: boolean;
  requireFooter?: boolean;
  requireContainer?: boolean;
};

type PageOptions = {
  getLayout?: (page: ReactNode) => ReactNode;
  redirectIfAuthenticated?: boolean;
  requiresAuth?: boolean;
  requiredPermissions?: string | string[];
  layoutConfig?: LayoutConfig;
};

type PageComponent<P = {}> = NextComponentType<
  NextPageContext,
  {},
  P
> & {
  pageOptions?: PageOptions;
};

declare module 'next' {
  type NextPageOptions = PageOptions;
  type NextPageComponent<P = {}> = PageComponent<P>;
  interface NextPageContext {
    resolvedUrl?: string;
  }
}

declare module 'next/app' {
  type NextAppProps<P = {}> = AppProps<P> & {
    Component: PageComponent;
  };
  type NextComponentType<
    C extends BaseContext = NextPageContext,
    IP = {},
    P = {}
  > = ComponentType<P> & {
    /**
     * Used for initial page load data population. Data returned from `getInitialProps` is serialized when server rendered.
     * Make sure to return plain `Object` without using `Date`, `Map`, `Set`.
     * @param ctx Context of `page`
     */
    getInitialProps?(ctx: C): IP | Promise<IP>;
  };
  type AppProps<P = Record<string, unknown>> = {
    Component: NextComponentType<NextPageContext, any, P>;
    router: Router;
    __N_SSG?: boolean;
    __N_SSP?: boolean;
    pageProps: P & {
      /** Initial session passed in from `getServerSideProps` or `getInitialProps` */
      session?: Session;
    };
    store: EnhancedStore;
  };
}
