// src/types/external.d.ts

// DhiWise plugin has no TS types
declare module '@dhiwise/component-tagger';

// Some setups need this to type HashLink/NavHashLink (package ships mixed typings)
declare module 'react-router-hash-link' {
  import * as React from 'react';
  import { LinkProps } from 'react-router-dom';

  export interface HashLinkProps extends Omit<LinkProps, 'to'> {
    to: string;
    smooth?: boolean;
    scroll?: (el: HTMLElement) => void;
  }

  export const HashLink: React.FC<HashLinkProps>;
  export const NavHashLink: React.FC<HashLinkProps & { activeClassName?: string }>;
}