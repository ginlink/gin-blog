---
sidebar_position: 100
---

### 题目：实现Promise

请利用Ts | Js，实现一个Promise，尽量根据[PromiseA+规范](https://promisesaplus.com/)来实现

### 分析

总体而言，有四个方面：

- 1.承诺有三种状态
- 2.承诺一定要有 `then` 方法
- 3.在调用then后，返回一个promise
- 4.promise结果解析函数

### 题解

代码详见 https://github.com/ginlink/js-demo/blob/main/src/02_Leetcode/033_Promise%E5%AE%9E%E7%8E%B0.ts

测试代码 https://github.com/ginlink/js-demo/blob/main/src/02_Leetcode/033_Promise%E5%AE%9E%E7%8E%B0.test.ts



```ts
/**
 *  This is a promise Implemented using the promiseA+ specification, For specific specifications, see:
 *  https://promisesaplus.com/
 */

/**
 *  On the whole, it has four aspects:
 *  1.promise has three state
 *  2.promise must has a then method
 *  3.after call then, return a promise
 *  4.promise resolve procedure
 */

export enum PromiseState {
  PENDING,
  FULFILLED,
  REJECTED,
}

export class MyPromise {
  private state = PromiseState.PENDING
  private reason: string = ''
  private value: any

  // why it is an array?
  // because the promise can be register more than once
  // it is a task queue
  private fulfilledQueueCallbacks: (() => void)[] = []
  private rejectedQueueCallbacks: (() => void)[] = []

  constructor(fn) {
    const resolve = (value: any) => {
      if (this.state === PromiseState.PENDING) {
        // why is use queueMicrotask?
        // because `then code` should be micro task
        queueMicrotask(() => {
          this.value = value
          this.state = PromiseState.FULFILLED

          // call the asynchronous task
          this.fulfilledQueueCallbacks.forEach((x) => x())
        })
      }
    }
    const reject = (reason: string) => {
      if (this.state === PromiseState.PENDING) {
        queueMicrotask(() => {
          this.reason = reason
          this.state = PromiseState.REJECTED

          this.rejectedQueueCallbacks.forEach((x) => x())
        })
      }
    }

    fn(resolve, reject)
  }

  then(onFulfilled?: any, onRejected?: any) {
    // can not return a MyPromise directly,
    // because there need promise2's reference
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state == PromiseState.PENDING) {
        onFulfilled &&
          this.fulfilledQueueCallbacks.push(() => {
          try {
            const x = onFulfilled(this.value)
            promiseResolveProcedure(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })

        onRejected &&
          this.rejectedQueueCallbacks.push(() => {
          try {
            const x = onRejected(this.reason)
            promiseResolveProcedure(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }

      if (this.state == PromiseState.FULFILLED) {
        if (onFulfilled) {
          try {
            const x = onFulfilled(this.value)

            promiseResolveProcedure(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        } else {
          resolve(this.value)
        }
      }

      if (this.state == PromiseState.REJECTED) {
        if (onRejected) {
          try {
            const x = onRejected(this.reason)
            promiseResolveProcedure(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        } else {
          reject(this.reason)
        }
      }
    })

    return promise2

    // PromiseResolveProcedure mainly solves two problems：
    // 1.Resolving circular references
    // 2.See if there's a promise inside
    function promiseResolveProcedure(that: MyPromise, x: any, resolve: any, reject: any) {
      if (that === x) {
        return reject(new TypeError('Circular reference'))
      }

      if (typeof x == 'object' || typeof x == 'function') {
        let then: any
        try {
          then = x.then
        } catch (err) {
          return reject(err)
        }

        if (typeof then == 'function') {
          const resolvePromise = (y) => {
            promiseResolveProcedure(that, y, resolve, reject)
          }
          const rejectPromise = (r) => {
            reject(r)
          }

          try {
            then.call(x, resolvePromise, rejectPromise)
          } catch (err) {
            if (that.currentState == PromiseState.PENDING) {
              reject(err)
            }
          }
        } else {
          resolve(x)
        }
      } else {
        resolve(x)
      }
    }
  }

  get currentState() {
    return this.state
  }
}
```

