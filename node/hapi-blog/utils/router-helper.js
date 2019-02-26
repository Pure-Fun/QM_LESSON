const Joi = require('joi');

const paginationDefine = {
  limit: Joi.number().required().min(1).max(30).description('限制返回的数量，默认15'),
  page:Joi.number().integer().required().description('当前页面， 默认为1'),
  pagination: Joi.boolean().required().description('是否开启分页')
}

module.exports = {
  paginationDefine
}