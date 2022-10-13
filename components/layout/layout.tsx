import { Header } from '@components/header/header';
import type { ReactElement } from 'react';
import type { ILayoutProperties } from './layout-interface';

export function Layout({ children }:ILayoutProperties): ReactElement {
  return (
    <div>
      <Header />
      <main className=" max-w-4xl mx-auto px-2 py-2">
        {children}
      </main>
    </div>
  );
}
