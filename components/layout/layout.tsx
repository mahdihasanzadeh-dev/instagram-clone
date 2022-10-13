import type { ReactElement } from 'react';
import type { ILayoutProperties } from './layout-interface';

export function Layout({ children }:ILayoutProperties): ReactElement {
  return (
    <main>
      {children}
    </main>
  );
}
