import { Home } from 'views/TeamManager/Home';
import { PrivateRouteType } from 'types/route';

const teamManagerRoute: PrivateRouteType = {
  home: {
    path: '/home',
    name: 'Home',
    element: <Home />,
  },
};

export default teamManagerRoute;
