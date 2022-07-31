---
sidebar_position: 100
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
---



# 实现Array.prototype.reduce

`CREATE: 2022-03-11 22:14:09`

### 题目：实现Array.prototype.reduce ( 简单:smile: )

请使用Ts | Js实现Array.prototype.reduce方法

### 分析

注意：

- 注意this指向，不要使用箭头函数去实现myReduce，否则this指向当前上下文（我的代码中是window）

### 题解

> TODO：边界条件处理

```ts
// @ts-ignore
Array.prototype.myReduce = function (fn: (prev: any, curr: any, index: number) => any, initialValue: any) {
  // @ts-ignore
  const len = this.length

  let prev = initialValue
  for (let i = 0; i < len; ++i) {
    // @ts-ignore
    prev = fn(prev, this[i], i)
  }

  return prev
}
```

使用

```ts
function main() {
  const arr = [1, 2, 3]

  // @ts-ignore
  const res = arr.myReduce((memo, curr) => {
    memo = memo + curr

    console.log('[memo]:', memo)

    return memo
  }, 0)

  console.log('[]:', res)
}

main()

export {}
```

