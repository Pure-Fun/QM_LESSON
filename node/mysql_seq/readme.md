- 首先考虑安全
    数据库的连接信息 统一放到.env 文件下来保存 .gitignore 本地有 但不上传github 
    env2 npm

- sequelize 命令行
    sequelize-cli 这里将继承mysql 初始化操作
    node react 叫做app 最后都少不了数据库服务(数据存储)
    简化sql操作
    1. init
    一个应用对应一个数据库 eleme DB_NAME
    使用sequelize工具来形象化mysql 操作
    代码运行环境分为开发环境(develop) 线上环境(production) 测试环境(test)
    线上mysql 的密码不会给我们
    process.env.NODE_ENV 设置当前环境是何？
    线上机器走 .env.prod
    本地开发走 .env  只需要有基本结构和一些数据就好了。
    env2 帮我们将.env 逐行读取为配置
