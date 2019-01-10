const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/api', (ctx) => {
  const data = {
    name: '张幸',
    age: 18
  }
  ctx.body = JSON.stringify(data);
});

app.use(router.routes());
app.listen(3000);