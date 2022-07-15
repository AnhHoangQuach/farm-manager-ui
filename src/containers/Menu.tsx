import { List, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/styles';
import { Link, useLocation } from 'react-router-dom';
import { teamManagerRoute } from 'routes';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profile';

const StyledListItem = styled(ListItemButton)({
  borderRadius: '8px !important',
  '&.Mui-selected': {
    backgroundColor: 'var(--color-primary-main) !important',
    color: '#fff',
  },
  '&:hover': {
    backgroundColor: 'var(--color-primary-light) !important',
    color: '#fff',
  },
});

type MenuItemProps = {
  name?: string;
  path: string;
};

const MenuItem = ({ name, path }: MenuItemProps) => {
  const location = useLocation();

  return (
    <Link to={path}>
      <StyledListItem selected={location.pathname.startsWith(path)}>
        <ListItemText classes={{ primary: 'font-medium' }}>{name}</ListItemText>
      </StyledListItem>
    </Link>
  );
};

const Menu = () => {
  const { role } = useSelector(profileSelector);

  const { home } = teamManagerRoute;
  return (
    <>
      <List className='flex flex-col gap-1'>
        <MenuItem {...home} />
      </List>
    </>
  );
};

export default Menu;
