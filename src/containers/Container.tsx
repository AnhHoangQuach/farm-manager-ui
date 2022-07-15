import { AppTheme } from 'containers';
import { SnackbarProvider } from 'notistack';

type ContainerType = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerType) => {
  return (
    <SnackbarProvider
      preventDuplicate={false}
      autoHideDuration={3000}
      variant='success'
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <AppTheme>{children}</AppTheme>
    </SnackbarProvider>
  );
};

export default Container;
