import Index from './components/index';
// import Navbar from './components/Navbar';
import mirList from './components/mirList';
import confGen from './components/confGen';
import aboutUs from './components/aboutUs';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  }, {
    path: '/status',
    name: 'status',
    component: mirList,
  }, {
    path: '/confgen',
    name: 'confgen',
    component: confGen,
  }, {
    path: '/about',
    name: 'about',
    component: aboutUs,
  }, {
    path: '*',
    redirect: '/',
  },
];

export default routes;
