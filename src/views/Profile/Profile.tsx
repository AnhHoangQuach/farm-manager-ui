import { DateTime } from 'luxon';
import { Avatar, Grid, Chip, TextField, Typography, Button } from '@mui/material';
import { ModeEditOutlineOutlined } from '@mui/icons-material';

const Profile = () => {
  return (
    <div className='mt-8'>
      <Chip label={DateTime.now().toFormat('dd/MM/yyyy HH:mm')} />
      <Grid container className='my-2 justify-center' columnSpacing={4} rowSpacing={3}>
        <Grid item xs={12} md={4}>
          <div className='flex flex-col items-center justify-center'>
            <Avatar alt='' sx={{ width: 150, height: 150 }} />
            <div className='flex items-center space-x-4 mt-4'>
              <ModeEditOutlineOutlined />
              <Chip label='Thay đổi ảnh đại diện' />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className='flex items-center mb-4 md:w-3/4 justify-between'>
            <Typography className='w-2/3 lg:w-full text-lg md:text-2xl font-semibold'>Họ tên</Typography>
            <TextField required fullWidth value='Nông dân A' />
          </div>
          <div className='flex items-center mb-4 md:w-3/4 justify-between'>
            <Typography className='w-2/3 lg:w-full text-lg md:text-2xl font-semibold'>CCCD/CMT</Typography>
            <TextField required fullWidth value='02230123456789' />
          </div>
          <div className='flex items-center mb-4 md:w-3/4 justify-between'>
            <Typography className='w-2/3 lg:w-full text-lg md:text-2xl font-semibold'>Địa chỉ</Typography>
            <TextField required fullWidth value='Đà Nẵng, Việt Nam' />
          </div>
          <div className='flex items-center mb-4 md:w-3/4 justify-between'>
            <Typography className='w-2/3 lg:w-full text-lg md:text-2xl font-semibold'>Số điện thoại</Typography>
            <TextField required fullWidth value='0373709321' />
          </div>
        </Grid>
      </Grid>
      <div className='w-full flex justify-center'>
        <Button variant='contained' color='primary'>
          Lưu chỉnh sửa
        </Button>
      </div>
    </div>
  );
};

export default Profile;
