import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContainer } from 'containers';
import { store } from 'reducers';
import { PrivateLayout } from 'layouts';
import { useEffect, useState } from 'react';
import { signIn } from 'reducers/profile';
import { updateDarkmode } from 'reducers/coreUi';
import { staticRoute } from 'routes';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const profile = JSON.parse(localStorage.getItem('profile') ?? '');
      const mode = localStorage.getItem('mode') ?? 'light';
      store.dispatch(signIn(profile));
      store.dispatch(updateDarkmode(mode));
    } catch {
    } finally {
      setIsReady(true);
    }
  }, []);

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <AppContainer>
          {isReady && (
            <Routes>
              {Object.values(staticRoute).map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path='/*' element={<PrivateLayout />} />
            </Routes>
          )}
        </AppContainer>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
