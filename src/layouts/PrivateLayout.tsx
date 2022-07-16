import { AppHeader } from 'containers';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { staticRoute, privateRoute } from 'routes';
import { profileSelector } from 'reducers/profile';
import { useEffect } from 'react';

const PrivateLayout = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(profileSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(staticRoute.login.path, { replace: true });
    }
  }, [navigate, isLoggedIn]);

  return (
    <div className='py-10 px-4 sm:px-[110px] h-screen'>
      <main className='bg-secondary-main rounded-[30px] h-full'>
        <div className='p-6'>
          <AppHeader />
          <Routes>
            {Object.values(privateRoute).map(({ path, element }) => (
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
