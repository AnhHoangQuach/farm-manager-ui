import { Home } from 'views/TeamManager/Home';
import { PrivateRouteType } from 'types/route';

const farmerRoute: PrivateRouteType = {
  home: {
    path: '/home',
    name: 'Home',
    element: <Home />,
  },
};

export default farmerRoute;
