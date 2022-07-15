type RouteType = {
  path: string;
  url?: (query: any) => string;
  name?: string;
  element: JSX.Element;
};

export type PrivateRouteType = {
  [key: string]: RouteType;
};
