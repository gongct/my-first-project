// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

Vue.use(VueRouter);

// let app = Vue.extend(App);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/', component: goods },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数
// 以前的写法 let router = new VueRouter();
// router.map({})
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// 这里的render: h => h(App) 是es6的写法
// 转换过来就是：  暂且可理解为是渲染App组件
// render:(function(h){
//     return h(App);
// });

// 现在，应用已经启动了！

// router.start(app, '#app');

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',    // 这里绑定的是index.html中的id为app的div元素
//   router,
//   render: h => h(App)
// });
