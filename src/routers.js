import Index from './components/index';
import mirList from './components/mirList';
import confGen from './components/confGen';
import aboutUs from './components/aboutUs';
import ubuntu from './components/doc/ubuntu';
import notfound from './components/notfound';

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
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: '', component: ubuntu }],
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
