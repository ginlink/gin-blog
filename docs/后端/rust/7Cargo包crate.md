---
sidebar_position: 7
---

[1] [Rust语言入门视频教程，Rust编程入门视频教程（视频）](https://www.bilibili.com/video/BV1hp4y1k7SV)

[2] [Rust 程序设计语言 简体中文版（文档）](https://kaisery.github.io/trpl-zh-cn/ch07-05-separating-modules-into-different-files.html)

## 7 Cargo/包/crate

### 7.1 包和 Crate

##### 一些cargo命令

| 命令                  | 描述         |
| --------------------- | ------------ |
| cargo check           | 只检查代码   |
| cargo new             | 创建项目     |
| cargo run             | 编译并运行   |
| cargo build           | 编译         |
| cargo build --release | 优化编译打包 |

##### cargo.toml

edition:rust版本

##### 猜数游戏

```rust
use std::{cmp::Ordering, io};

use rand::Rng;

/**
 * 猜数游戏
 */
fn main() {
  println!("猜数游戏！");
  let secret_number = rand::thread_rng().gen_range(1..101);

  println!("神秘数字：{}", secret_number);

  loop {
    println!("猜一个数字：");
    let mut guess = String::new();

    io::stdin().read_line(&mut guess).expect("无法读取");

    // shadow
    let guess: u32 = match guess.trim().parse() {
      Ok(num) => num,
      Err(_) => continue,
    };

    println!("你猜的数字为：{}", guess);
    match guess.cmp(&secret_number) {
      Ordering::Less => println!("Too small!"),
      Ordering::Greater => println!("Too large!"),
      Ordering::Equal => {
        println!("You win!");
        break;
      }
    }
  }
}
```

##### 组织方式

![image-20220822121530206](https://cdn.gincool.com/img/image-20220822121530206.png)

##### Package和Crate

![image-20220822121736781](https://cdn.gincool.com/img/image-20220822121736781.png)

##### Crago惯例

![image-20220822122130146](https://cdn.gincool.com/img/image-20220822122130146.png)

##### Module

![image-20220822122257611](https://cdn.gincool.com/img/image-20220822122257611.png)

![image-20220822122408595](https://cdn.gincool.com/img/image-20220822122408595.png)

### 7.2 路径

与文件系统路径类似

![image-20220823165633454](https://cdn.gincool.com/img/image-20220823165633454.png)

![image-20220823165928165](https://cdn.gincool.com/img/image-20220823165928165.png)

一般都使用 `绝对路径`，因为可以单独分开

##### 私有边界

rust是收敛的，默认是私有的

![image-20220823170251883](https://cdn.gincool.com/img/image-20220823170251883.png)

pub关键字可以定义公开

super关键字可以访问父级模块路径的内容

pub struct定义公开struct，但内部默认是私有的

pub enum定义公开enum，但内部所有变体是公共的

### 7.4 use

use关键字可以将路径导入到作用域内

- 仍遵循私有性原则

![image-20220823171012621](https://cdn.gincool.com/img/image-20220823171012621.png)

一般函数，是引用其父模块，只用通过父模块去调用该函数

##### use的习惯用法

![image-20220823171416899](https://cdn.gincool.com/img/image-20220823171416899.png)

##### as关键字

![image-20220823171459605](https://cdn.gincool.com/img/image-20220823171459605.png)

##### pub use

![image-20220823171739520](https://cdn.gincool.com/img/image-20220823171739520.png)

##### 使用外部包

示例，rand包

标准库(std)也被当做外部库

**问：都有哪些标准库呢？**

##### 嵌套路径

![image-20220823172428952](https://cdn.gincool.com/img/image-20220823172428952.png)

特殊情况

![image-20220823172352153](https://cdn.gincool.com/img/image-20220823172352153.png)

通配符*

![image-20220823172520509](https://cdn.gincool.com/img/image-20220823172520509.png)

### 7.5 将模块拆分为多个文件

![image-20220823172810414](https://cdn.gincool.com/img/image-20220823172810414.png)

![image-20220823172829568](https://cdn.gincool.com/img/image-20220823172829568.png)

[1] [rust 模块组织结构](https://www.cnblogs.com/li-peng/p/13587910.html)

![image-20220823175904992](https://cdn.gincool.com/img/image-20220823175904992.png)
