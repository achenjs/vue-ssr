const Vue = require('vue');

const createRoute = require('./router/index.js');

module.exports = (context) => {
  const router = createRoute();

  const app = new Vue({
    router,
    data: {
      message: '这是一段描述11',
      url: context.url,
    },
    template: `
      <div>
        <p>{{message}}</p>
        <p>当前路径: {{url}}</p>
        <ul>
          <li>
            <router-link to='/home'>home</router-link>
          </li>
          <li>
            <router-link to='/abort'>abort</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    `,
  });

  return {
    app,
    router,
  };
}
