import { List, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/styles';
import { Link, useLocation } from 'react-router-dom';
import { privateRoute } from 'routes';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profile';

const StyledListItem = styled(ListItemButton)({
  borderRadius: '28px !important',
  '&.Mui-selected': {
    backgroundColor: 'var(--color-primary-dark) !important',
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
  const { profile } = privateRoute;

  const { task, attendance } = privateRoute;

  const { employee } = privateRoute;

  const { kpi } = privateRoute;

  return (
    <>
      {role === 'FARMER' && (
        <List className='md:ml-10 flex flex-col gap-2 md:gap-0 md:flex-row md:space-x-10'>
          <MenuItem {...task} />
          <MenuItem {...attendance} />
          <MenuItem {...profile} />
        </List>
      )}

      {role === 'MAIN_MANAGER' && (
        <List className='md:ml-10 flex flex-col gap-2 md:gap-0 md:flex-row md:space-x-10'>
          <MenuItem {...employee} />
          <MenuItem {...profile} />
        </List>
      )}

      {role === 'TEAM_MANAGER' && (
        <List className='md:ml-10 flex flex-col gap-2 md:gap-0 md:flex-row md:space-x-10'>
          <MenuItem {...kpi} />
          <MenuItem {...profile} />
        </List>
      )}
    </>
  );
};

export default Menu;
