const roles = ['FARMER', 'MAIN_MANAGER', 'TEAM_MANAGER'];

export const randomRole = () => {
  return roles[Math.floor(Math.random() * roles.length)];
};
