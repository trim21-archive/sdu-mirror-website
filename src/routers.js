import Index from 'components/index';
import mirList from 'components/mirList';
import confGen from 'components/confGen';
import ubuntu from 'components/doc/ubuntu';
import aosp from 'components/doc/aosp';
import npm from 'components/doc/npm';
import release from 'components/release';
import notfound from 'components/notfound';
import aboutUs from 'components/aboutUs';

const routes = [
  {
    path: '/',
    component: Index,
  }, {
    path: '/status',
    component: mirList,
  }, {
    path: '/confgen',
    component: confGen,
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: 'ubuntu', component: ubuntu },
      { path: 'aosp', component: aosp },
      { path: 'npm', component: npm },
    ],
  }, {
    path: '/iso',
    component: release,
  }, {
    path: '/about',
    // name: 'about',
    component: aboutUs,
  }, {
    path: '/404',
    // name: 'notfoune',
    component: notfound,
  }, {
    path: '*',
    redirect: '/404',
  },
];

export default routes;
