const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

const main = async(ctx, next) => {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFileSync('./template.html', 'utf-8');
}

app.use(main);
app.listen(8080);