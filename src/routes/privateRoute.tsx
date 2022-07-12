import { Home } from 'views/Home';

type RouteType = {
  path: string;
  url?: (query: any) => string;
  name?: string;
  element: JSX.Element;
};

type PrivateRouteType = {
  [key: string]: RouteType;
};

const privateRoute: PrivateRouteType = {
  home: {
    path: '/dashboard',
    name: 'Dashboard',
    element: <Home />,
  },
};

export default privateRoute;