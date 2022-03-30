---
sidebar_position: 110
---

# 3-23 剑指 Offer 10- I. 斐波那契数列

> Date：2022-03-23 23:37:33

标签：

- 动态规划

### 题目：[剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/) ( 简单:smile: ) 

写一个函数，输入 `n` ，求斐波那契（Fibonacci）数列的第 `n` 项（即 `F(N)`）。斐波那契数列的定义如下：

```ts
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

### 示例

示例1：

```ts
输入：n = 2
输出：1
```

示例2：

```ts
输入：n = 5
输出：5
```

### 分析

- 无脑递归

  O(2^n)

  构造了一棵树，时间复杂度太高，该方法弃用

- 动态规划

  O(n), O(n)

  如果用滚动数组，则可以将空间复杂度降低为O(1)

- 矩阵快速幂

  难度较大，暂不做了解

  O(logn), O(1)

### 题解

> 无脑递归

```ts
function fib(n: number): number {
  if (n == 0 || n == 1) {
    return n
  }

  return (fib(n - 1) + fib(n - 2)) % (1e9 + 7)
}
```

> 动态规划

```ts
function fib111(n: number): number {
  const dp: number[] = new Array(n + 1)

  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; ++i) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7)
  }

  return dp[n]
}
```

使用

```ts
function main() {
  // const n = 2
  // const n = 5
  // const n = 19
  // const n = 39
  const n = 45000000

  // console.log('[]:', fib(n))
  console.log('[]:', fib111(n))
}

main()

export {}
```

