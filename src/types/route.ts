type RouteType = {
  path: string;
  url?: (query: any) => string;
  name?: string;
  element: JSX.Element;
  requireRole?: (role: any) => boolean;
};

export type PrivateRouteType = {
  [key: string]: RouteType;
};
