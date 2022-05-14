---
sidebar_position: 100
---

# New 原理

`CREATE: 2022-03-11 22:14:09`

### 题目：实现一个 new 操作符的功能 ( 简单:smile: )

请利用 Ts | Js，实现一个 new 操作符的功能

### 分析

new 操作符一共分为 4 步：

- 创建一个对象，并将原型指向构造器的原型
- 纠正创建对象的构造器
- 借用构造函数，去初始化数据
- 返回构造函数返回的对象（如果存在），不存在则返回创建的对象

### 题解

```ts
function MyNew(constructor, ...args) {
  const obj = Object.create(constructor.prototype)

  obj.constructor = constructor

  const result = constructor.apply(obj, args)

  console.log('[result]:', result)
  console.log('[obj]:', obj)

  return typeof result == 'object' ? result : obj
}
```

使用

```ts
class Person {
  private name?: string

  constructor(name?: string) {
    this.name = name
  }
}

// function Person(name) {
//   this.name = name
// }

// class is only a candy of function
// so it can be applied, although not be invoked

function main() {
  const person = MyNew(Person, 'John')

  console.log('[person]:', person)
}

main()
```

### Prototype 扩展 1：Js 中 `prototype`、`__proto__`、`constructor`三者之间有什么区别和联系呢？

看下图

![image-20220308203855606](https://cdn.gincool.com//img/image-20220308203855606.png)

我们只看单独的一个，就比价清楚它们三者的联系了：

![image-20220308204835904](https://cdn.gincool.com//img/image-20220308204835904.png)

看懂这个图，就可以解决以下问题：

- 为什么 Person.prototype.say 方法，在 person 实例上可以调用？

### Prototype 扩展 2：用 toString 去准确判断数据类型

以下部分代码参考自 [lodash](https://github.com/lodash/lodash) 库

```ts
const arrayTag = '[object Array]'
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const mapTag = '[object Map]'
const numberTag = '[object Number]'
const objectTag = '[object Object]'
const regexpTag = '[object RegExp]'
const setTag = '[object Set]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const weakMapTag = '[object WeakMap]'

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return Object.prototype.toString.call(value)
}
```

使用

```ts
const num = 123

if (getTag(num) == numberTag) {
  console.log('[]:', 'this is a number')
}

// =>
// []: this is a number
```
