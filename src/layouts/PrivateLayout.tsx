import { AppHeader } from 'containers';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { staticRoute, privateRoute } from 'routes';
import { profileSelector } from 'reducers/profile';
import { useEffect } from 'react';
import { enable, disable, setFetchMethod } from 'darkreader';
import { coreUiSelector } from 'reducers/coreUi';

const PrivateLayout = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role } = useSelector(profileSelector);
  const { mode } = useSelector(coreUiSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(staticRoute.login.path, { replace: true });
    }

    if (mode) {
      setFetchMethod(window.fetch);
      mode === 'light' ? disable() : enable({ brightness: 100, contrast: 96, sepia: 0 });
    }
  }, [navigate, isLoggedIn, mode]);

  return (
    <div className='py-10 px-4 sm:px-[110px] h-screen'>
      <main className='bg-secondary-main rounded-[30px] h-full'>
        <div className='p-6'>
          <AppHeader />
          <Routes>
            {Object.values(privateRoute)
              .filter(({ requireRole }) => !requireRole || requireRole({ role }))
              .map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            <Route path='*' element={<Navigate to={privateRoute.profile.path} />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default PrivateLayout;
