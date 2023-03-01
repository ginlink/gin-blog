## Node

- https://loopback.io/

  A highly extensible Node.js and TypeScript framework for building APIs and microservices.

- Node.js 开发人员学习路线

  https://roadmap.sh/nodejs

### 1 Nestjs

- [API with NestJS](https://wanago.io/courses/api-with-nestjs/)

  内含有大量的实例，例如JWT、验证转化数据、统一异常处理、单元测试、发送邮件等

### 0 一些常见需求

#### 0.1 权限管理

RBAC 基于角色的访问控制

口诀

- 用户表，角色表，用户角色中间表

- 角色表，权限表，角色权限中间表

用户与用户组关系

![image-20221015213715738](https://cdn.gincool.com/img/image-20221015213715738.png)

#### 0.2 前端权限管理

前端权限管理一般都是中后台，且基本为控制菜单显示

大致逻辑为：1.动态获取后端菜单项 2.渲染菜单时判断菜单角色和本机用户角色是否匹配，匹配渲染，反之

