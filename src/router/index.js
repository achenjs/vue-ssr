const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

module.exports = () => new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: {
        template: `
          <div>home</div>
        `
      }
    },
    {
      path: '/abort',
      component: {
        template: `
          <div>abort</div>
        `
      }
    }
  ]
});