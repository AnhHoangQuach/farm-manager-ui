import { AppHeader } from 'containers';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { teamManagerRoute, staticRoute, mainManagerRoute, farmerRoute } from 'routes';
import { useWindowSize } from 'hooks';
import { profileSelector } from 'reducers/profile';
import { useEffect } from 'react';

const PrivateLayout = () => {
  const { isMobile } = useWindowSize();
  const navigate = useNavigate();
  const { isLoggedIn, role } = useSelector(profileSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(staticRoute.login.path, { replace: true });
    }
  }, [navigate, isLoggedIn]);

  return (
    <div className='App'>
      <main>
        <AppHeader />
        <div className='px-[110px] py-10 bg-secondary-main'>
          <Routes>
            {role === 'TEAM_MANAGER' && (
              <>
                {Object.values(teamManagerRoute).map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
                <Route path='*' element={<Navigate to={teamManagerRoute.home.path} />} />
              </>
            )}

            {role === 'MAIN_MANAGER' && (
              <>
                {Object.values(mainManagerRoute).map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
                <Route path='*' element={<Navigate to={mainManagerRoute.home.path} />} />
              </>
            )}

            {role === 'FARMER' && (
              <>
                {Object.values(farmerRoute).map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
                <Route path='*' element={<Navigate to={farmerRoute.home.path} />} />
              </>
            )}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default PrivateLayout;
