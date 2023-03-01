## Eslint vs Prettier

[Eslint ](https://eslint.org/)是在2013年诞生的，Eslint可配置的很多，也有很多插件，可以配置只是检查语法，也可以让它不仅检查语法还要找出错误；而 [Prettier ](https://prettier.io/)是在2016年创建的，有自己主见的代码格式化工具，它的配置很少。

### 区别

- Eslint擅长发现代码错误
- Prettier擅长格式化代码

### 项目中使用

一般现在项目都是基于架子去开发的，例如：vue阵营的vue-cli，quasar，react阵营的cra，next等，都会将eslint引入，并有默认配置，我们基本不需要做什么。

### Vscode中保存格式化

装插件 `eslint` 和 `prettier`

在 `.vscode/settings.json` 中新增一个属性，保存自动格式化

```sh
"editor.formatOnSave": true
```

其他编辑器中使用eslint：https://eslint.org/docs/latest/user-guide/integrations#editors

例如：[WebStorm](https://eslint.org/docs/latest/user-guide/integrations#editors)

### 忽略

有三个级别的忽略：1.多文件 2.单文件 3.行

- 多文件

  配置.eslintignore即可

- 单文件

  在文件头部注释

  ```tsx
  /* eslint-disable */
  ```

- 行

  ```tsx
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ```

### 保证代码一致

要保证代码一致，可以在git提交前lint一下，通过则提交，不通过则无法提交

利用 [`husky`](https://github.com/typicode/husky) 进行操作，Husky 负责管理我们的脚本将在 Git 生命周期中的哪个时间点运行。

```sh
# pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# TODO (Suren): Add more tests
npx lint-staged
npm run lint
```

