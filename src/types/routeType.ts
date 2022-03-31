import * as React from 'react';

export interface RouteType {
  path: string;
  props?: any;
  exact?: boolean;
  routes?: Array<RouteType> | undefined;
  component: React.ComponentType<any>;
};