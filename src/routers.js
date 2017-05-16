import Index from 'components/index';
import mirList from 'components/mirList';
import confGen from 'components/confGen';
import aboutUs from 'components/aboutUs';
import notfound from 'components/notfound';

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
    path: '/404',
    name: 'notfoune',
    component: notfound,
  }, {
    path: '*',
    redirect: '/404',
  },
];

export default routes;
