const express = require('express');
const Vue = require('vue');

const fs = require('fs');
const path = require('path');

const { createRenderer } = require('vue-server-renderer');

const renderer = createRenderer({
  template: fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8'),
});

const VueApp = require('./src/app');

const app = express();

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8;');

  const html = VueApp({
    url: req.url,
  });

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