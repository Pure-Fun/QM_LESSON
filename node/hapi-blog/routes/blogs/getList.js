const redis = require('../../redis');

module.exports = (GROUP_NAME, options) => ({
  method: 'GET',
  path: `/${GROUP_NAME}`,
  handler: async (request, reply) => {
    const { limit, page } = request.query;
    const offset = (page - 1) * limit;
    // reply(limit, page, offset);
    const { client, getAsync, setAsync } = redis(request);
    // mysql 有IO瓶颈，用户一多，不做缓存很难支撑。redis或早期的memorycache来做内存数据库，读取速度快，没有IO压力
    // 取数据 通过redis(key) 查看redis有没有，有的话直接返回
    const redisResName = `postlimit${limit}offset${offset}list`;
    const redisRes = await getAsync(redisResName);
    console.log('===========================' + redisRes);
    if (redisRes) {
      reply(JSON.parse(redisRes));
    } else {
      const { rows: results, count: totalCount } = await options.models.blogs.findAndCountAll({
        limit,
        offset
      });
      await setAsync(redisResName, JSON.stringify({ results, totalCount }));
      client.EXPIRE(redisResName, 50);
      reply({ results, totalCount });
    }
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '获取文章列表',
    validate: {
      query: {
        ...options.paginationDefine
      }
    }
  }
})