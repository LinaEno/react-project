import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default WithAuthRedirect(DashboardPage, '/');
