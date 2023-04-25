## GO

[1] [从零开始学 Go Web 编程：build-web-application-with-golang](https://github.com/astaxie/build-web-application-with-golang)

[2] [这12个Go语言项目：带你从入门到精通](https://zhuanlan.zhihu.com/p/517951968)

[3] [the-way-to-go_ZH_CN](https://github.com/unknwon/the-way-to-go_ZH_CN)

[4] [2023版Golang全栈教程，从基础入门到Golang编程大佬！](https://www.bilibili.com/video/BV1o54y1N7ZP)

[5] [从 JavaScript 到 Go：个人经历](https://kizer.dev/from-javascript-to-go-a-personal-experience-8a4af6a55487) js与go是如此的类似



### 基础

一些重点：

- go定义变量（简洁方式），但只能在函数内部这样定义

  ```go
  vname1, vname2, vname3 := v1, v2, v3
  ```

- 在Go中字符串是不可变的，否则会报错：cannot assign to s[0]

  ```go
  s := "hello"
  c := []byte(s)  // 将字符串 s 转换为 []byte 类型
  c[0] = 'c'
  s2 := string(c)  // 再转换回 string 类型
  ```

- 一些默认的行为

  - 大写字母开头的变量是可导出的，也就是其它包可以读取的，是公有变量；小写字母开头的就是不可导出的，是私有变量。
  - 大写字母开头的函数也是一样，相当于`class`中的带`public`关键词的公有函数；小写字母开头的就是有`private`关键词的私有函数。

- make和new

  `new`返回指针，`make`返回初始化后的（非零）值

- Go里面`switch`默认相当于每个`case`最后带有`break`，匹配成功后不会自动向下执行其他case，而是跳出整个`switch`, 但是可以使用`fallthrough`强制执行后面的case代码

疑问：

- [ ] i, j = i+1, j-1，平行赋值的执行顺序是什么？

