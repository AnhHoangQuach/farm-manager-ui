import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profile';
import { useNavigate } from 'react-router-dom';
import { teamManagerRoute } from 'routes';
import { Camera } from 'utils/camera';
import { Button, Grid, Chip } from '@mui/material';
import { useWindowSize } from 'hooks';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(profileSelector);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(teamManagerRoute.home.path, { replace: true });
    }
  }, [navigate, isLoggedIn]);

  const { isMobile } = useWindowSize();

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <div className='py-10 px-4 sm:px-[110px] h-screen'>
      <div className='bg-secondary-main rounded-[30px] relative h-full flex flex-col items-center justify-center text-center overflow-x-hidden overflow-y-auto'>
        <Grid container className='px-4' rowSpacing={3}>
          <Grid item xs={12} sm={6} className='text-center'>
            {isCameraOpen && (
              <Camera onCapture={(blob: any) => setCardImage(blob)} onClear={() => setCardImage(undefined)} />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            {cardImage && (
              <div className='flex flex-col items-center justify-center space-y-4'>
                <img src={cardImage && URL.createObjectURL(cardImage)} alt='' />
                <Chip label='Xem trước' size='medium' variant='outlined' />
              </div>
            )}
          </Grid>
        </Grid>

        <div
          className={`flex items-center w-full px-4 space-x-4 absolute bottom-0 mb-4 ${
            (!isCameraOpen || !isMobile) && 'justify-center'
          }`}
        >
          {!isCameraOpen && (
            <Button variant='contained' onClick={() => setIsCameraOpen(true)}>
              Bật camera
            </Button>
          )}
          <Button
            variant='contained'
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
          >
            Đóng Camera
          </Button>
        </div>
        {cardImage && (
          <Button className='absolute bottom-0 right-0 mr-4 mb-4' variant='contained'>
            Đăng nhập
          </Button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
