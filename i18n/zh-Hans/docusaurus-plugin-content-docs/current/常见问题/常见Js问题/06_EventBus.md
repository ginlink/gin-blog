---
sidebar_position: 100
---

# Event类

`CREATE: 2022-03-11 22:14:09`

### 题目：请用Ts | Js实现一个Event类 ( 简单:smile: )

Event类具有如下功能：

- 注册事件
- 触发事件（一次，多次）
- 注销事件

### 分析

Event与发布-订阅模式类似，区别为前者为 `一对一`，而后者为 `一对多` 

### 题解

```ts
class EventBus {
  private cache: {
    [type: string]: ((...args: any) => void)[]
  } = {}

  on(type: string, fn: any) {
    const fns = this.cache[type]

    if (fns) {
      fns.push(fn)
    } else {
      this.cache[type] = [fn]
    }

    return this
  }

  once(type: string, fn: any) {
    const wrapped = (...args) => {
      fn.apply(null, args)
      this.off(type, wrapped)
    }

    return this.on(type, wrapped)
  }

  emit(type: string, ...args: any) {
    const fns = this.cache[type]

    fns && fns.forEach((fn) => fn && fn.apply(null, args))

    return this
  }

  off(type: string, fn: any) {
    const fns = this.cache[type]

    if (!fns) return this

    const found = fns.indexOf(fn)
    if (found != -1) {
      fns.splice(found, 1)
    }

    return this
  }

  clear(type?: string) {
    if (!type) {
      this.cache = {}
    } else {
      this.cache[type] = []
    }
    return this
  }
}
```

使用

```ts
function main() {
  const bus = new EventBus()

  const eventName = 'UPDATE'
  const arg = 'hello'

  const update = (arg) => {
    console.log('[]:', arg)
  }

  bus.on(eventName, update)
  bus.on(eventName, update)
  bus.on(eventName, update)

  bus.emit(eventName, arg)

  console.log('[---------off one------------]:')
  bus.off(eventName, update).emit(eventName, arg)

  console.log('[---------clear UPDATE------------]:')
  bus.clear(eventName)
  bus.emit(eventName, arg)

  console.log('[---------once------------]:')
  bus.once(eventName, update)
  bus.emit(eventName, arg)
  bus.emit(eventName, arg)
}
main()

export {}
```

输出

```ts
[]: hello
[]: hello
[]: hello
[---------off one------------]:
[]: hello
[]: hello
[---------clear UPDATE------------]:
[---------once------------]:
[]: hello
```

### 参考

[1] 手写 Event 类.https://2heal1.github.io/interviewCoding/%E6%89%8B%E5%86%99Event%E7%B1%BB.html#%E6%89%8B%E5%86%99-event-%E7%B1%BB

# 
