const express = require('express');

const fs = require('fs');
const path = require('path');

const { createRenderer } = require('vue-server-renderer');

const renderer = createRenderer({
  template: fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8'),
});

const app = express();

const VueApp = require('./src/app');

app.get('*', async (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8;');

  const { app, router } = await VueApp({ url: req.url });
  const html = app;

  router.push(req.url);

  renderer.renderToString(html).then(html => {
    res.end(`
      ${html}
    `);
  }).catch(err => {
    console.log(err);
    res.end('vue-render error');
  });
})

app.listen(4000, () => {
  console.log('start success');
})