import { Home } from 'views/TeamManager/Home';
import { PrivateRouteType } from 'types/route';

const mainManagerRoute: PrivateRouteType = {
  home: {
    path: '/home',
    name: 'Home',
    element: <Home />,
  },
};

export default mainManagerRoute;
