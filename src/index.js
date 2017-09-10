const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = { foo: 'bar' };
});

app.listen(3000);
