// import Loadable from 'react-loadable';
// import Loading from '@/components/Loading'
// const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'),loading: Loading});

export default [
  { path: "/dashboard", component: <div>Dashboard</div>, roles: ["admin","editor","guest"] },
  // { path: "/error/404", component: Error404 },
];
