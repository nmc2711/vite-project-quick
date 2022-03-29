import * as React from 'react';

export interface RouteType {
  path: string;
  component: React.ComponentType<any>;
  props?: any;
  exact?: boolean;
  routes?: Array<RouteType> | undefined;
};