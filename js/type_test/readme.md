1. 复杂数据类型，也称引用类型

  没有独立的内存，指向同一物理地址，造成之后操作的困惑。
  单独的声明对象，再手动的去拷贝。

2.typeof 类型运算符，基础数据类型
  typeof 运算符返回一个用来表示表达式的数据类型的字符串。
  可能的字符串有：”number”、”string”、”boolean”、”object”、”function” 和 “undefined”。
  对于Array,Null等特殊对象使用typeof一律返回object，这正是typeof的局限性。
