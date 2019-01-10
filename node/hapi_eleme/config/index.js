const env = process.env;
console.log('<------------------------', env.HOST, ':', env.PORT, '------------------------>');
module.exports = {
  host: env.HOST,
  port: env.PORT
}