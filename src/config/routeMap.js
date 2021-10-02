import Loadable from 'react-loadable';
import Loading from '@/components/Loading'
// dashboard
const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'),loading: Loading});
// user
const User = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/user'),loading: Loading});
// error
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'),loading: Loading});
export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/user", component: User, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
