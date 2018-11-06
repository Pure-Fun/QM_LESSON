- 数据保存
  1. localStorage 
    适合存储小的，结构简单的数据， 复杂的结合JSON.stringify()
    JSON.parse() 2~6M之间

  2. cookie
    cookie 就是一个字符串

- indexDB 前端的MongoDB
  1.request
    window.indexedDB().open(dbname,dbversion)
  2.异步的
    onsuccess 开始数据业务
    onupgradeneeded 更新数据库
    db.createObjectStore()
    objectStore.createIndex('email', 'email', { unique: true })
  3. 事物 transaction 让数据存储更安全，
    add request onsuccess