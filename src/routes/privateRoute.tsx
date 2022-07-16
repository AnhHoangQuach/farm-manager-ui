import { Fragment } from 'react';
import { PrivateRouteType } from 'types/route';

const privateRoute: PrivateRouteType = {
  task: {
    path: '/task',
    name: 'Nhiệm Vụ',
    element: <Fragment />,
  },
  attendance: {
    path: '/attendance',
    name: 'Điểm Danh',
    element: <Fragment />,
  },
  employee: {
    path: '/employee',
    name: 'Nhân sự',
    element: <Fragment />,
  },
  kpi: {
    path: '/kpi',
    name: 'KPI',
    element: <Fragment />,
  },
  profile: {
    path: '/profile',
    name: 'Thông tin cá nhân',
    element: <Fragment />,
  },
};

export default privateRoute;
