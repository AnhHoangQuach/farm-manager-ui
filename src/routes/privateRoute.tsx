import { Fragment } from 'react';
import { PrivateRouteType } from 'types/route';
import { Profile } from 'views/Profile';

const privateRoute: PrivateRouteType = {
  task: {
    path: '/task',
    name: 'Nhiệm Vụ',
    element: <Fragment />,
    requireRole: ({ role }) => role === 'FARMER',
  },
  attendance: {
    path: '/attendance',
    name: 'Điểm Danh',
    element: <Fragment />,
    requireRole: ({ role }) => role === 'FARMER',
  },
  employee: {
    path: '/employee',
    name: 'Nhân sự',
    element: <Fragment />,
    requireRole: ({ role }) => role === 'MAIN_MANAGER',
  },
  kpi: {
    path: '/kpi',
    name: 'KPI',
    element: <Fragment />,
    requireRole: ({ role }) => role === 'TEAM_MANAGER',
  },
  profile: {
    path: '/profile',
    name: 'Thông tin cá nhân',
    element: <Profile />,
  },
};

export default privateRoute;
