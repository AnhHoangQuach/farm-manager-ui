import {
  Logout,
  Menu as MenuIcon,
  NotificationsNoneOutlined,
  Brightness4Outlined,
  Brightness5Outlined,
} from '@mui/icons-material';
import { AppBar, Divider, Drawer, IconButton, Toolbar, Switch } from '@mui/material';
import { AppMenu } from 'containers';
import { useWindowSize } from 'hooks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'reducers/profile';
import { Link } from 'react-router-dom';
import { updateDarkmode, coreUiSelector } from 'reducers/coreUi';
import { isEnabled, enable, disable, setFetchMethod } from 'darkreader';

const Header = () => {
  const dispatch = useDispatch();
  const { isMobile } = useWindowSize();

  const [openDrawer, setOpenDrawer] = useState(false);

  const { mode } = useSelector(coreUiSelector);

  const darkReaderOptions = { brightness: 100, contrast: 96, sepia: 0 };

  const toggleDarkMode = () => {
    setFetchMethod(window.fetch);
    const isOn = isEnabled();
    isOn ? disable() : enable(darkReaderOptions);
    dispatch(updateDarkmode(isOn ? 'light' : 'dark'));
  };

  return (
    <>
      <Drawer
        anchor='left'
        variant={isMobile ? 'temporary' : 'persistent'}
        open={isMobile ? openDrawer : false}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ style: { width: '280px', padding: '8px 16px' } }}
      >
        <div className='flex justify-center items-center h-12 gap-3'>
          <Link to='/'>
            <img src={require('assets/icons/logo_farm.png')} alt='' className='h-10' />
          </Link>
          <span className='font-medium text-2xl text-primary-main'>METAFARM</span>
        </div>
        <Divider className='my-2' />
        <AppMenu />
      </Drawer>

      <AppBar position='static' color='secondary' elevation={0}>
        <Toolbar disableGutters>
          {isMobile ? (
            <IconButton onClick={() => setOpenDrawer(true)} className='mr-2'>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <div className='flex justify-center items-center h-12 gap-3'>
                <Link to='/'>
                  <img src={require('assets/icons/logo_farm.png')} alt='' className='h-20' />
                </Link>
              </div>
              <Divider className='my-2' />
              <AppMenu />
            </>
          )}

          <div className='flex-1' />
          <div className='flex items-center mr-3'>
            <Switch checked={mode === 'dark'} onClick={toggleDarkMode} />
            {mode === 'dark' ? <Brightness4Outlined /> : <Brightness5Outlined />}
          </div>
          <IconButton className='mr-3'>
            <NotificationsNoneOutlined />
          </IconButton>
          <IconButton className='mr-3' onClick={() => dispatch(signOut())}>
            <Logout />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
