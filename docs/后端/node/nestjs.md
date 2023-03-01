## 1 Nestjs

[1] [【Nestjs实战】Nodejs必学框架 | Nest企业级项目构建与开发实战](https://www.bilibili.com/video/BV1bQ4y1A77L)

​	b站视频，通俗易懂

​	![image-20221105194119782](https://cdn.gincool.com/img/image-20221105194119782.png)

​	项目地址：https://github.com/HeyiMaster/nest-starter

[2] [API with NestJS](https://wanago.io/courses/api-with-nestjs/)

​	文章，内含有大量的实例，例如JWT、验证转化数据、统一异常处理、单元测试、发送邮件等

[3] [槑槑管理系统](https://github.com/87789771/meimei-nestjs-admin)

​	槑槑是一款后台管理系统，它前端基于 [vue](https://cn.vuejs.org/) 和 [element-ui](https://element.eleme.cn/#/zh-CN) ，后端基于 node 的后端框架 [nestjs](https://docs.nestjs.cn/8/) ，数据库采用 mysql ，缓存采用 redis。

[4] [Nest中文文档](https://docs.nestjs.cn/)

[5] [后端思想篇：设计好接口的36个锦囊！](https://ost.51cto.com/posts/12642)



### 1 控制器

三大参数：Query、Param、Body

DTO（data transfer object）

### 2 Swagger

```ts
const swaggerOptions = new DocumentBuilder()
  .setTitle('nest-starter api document')
  .setDescription('nest starter project api document')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, swaggerOptions);
SwaggerModule.setup('doc', app, document);
```

一些注解

```ts
@ApiBearerAuth()
@ApiTags('hello')
@ApiQuery({ name: 'name', required: false })
```

### 3 中间件

```ts
// 打印日志中间件
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req;
    console.log(`${method} ${path}`);
    next();
  }
}

// 使用
@Module({
  imports: [HelloModule, ExceptionModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为 hello 路由添加中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('hello');
  }
}
```

## 1 Nestjs感悟

nestjs可分为静态和动态两种架构

### 1.1 静态架构

静态部分包含Provider（一般的功能）、Module（模块）和Decorator（装饰器）三个关键概念。其中Provider用于完成具体的业务逻辑。Module将各种业务逻辑以及相互之间的依赖关系，以IoC架构将其组装在一起。Decorator则将部分公共业务以装饰器（这种特殊的函数形态）封装在另外一块代码中。

#### 模块、Provider、控制器类和装饰器关系

Nest是一个IoC容器。一个模块相当于一个`群组`，这个群组中的各个组件通过`@Injectable()`装饰器来标记出，并在初始化时注入到依赖的对象中。控制器是一种特殊的Provider，完成特定的功能。一般的服务类、工具类等等，都可以归纳到Provider中。

### 1.2 动态架构

#### Nestjs请求生命周期

![summary.png](https://cdn.gincool.com/img/06b81a2592a04512a95f29f309f9a8e5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.png)

##### 对象差异

| 类型       | 声明方式 | 使用方式   | 接口或基类        | 实现名称                    | 可访问对象            | 作用对象                 |
| ---------- | -------- | ---------- | ----------------- | --------------------------- | --------------------- | ------------------------ |
| 中间件     | 类、函数 | 模块中组装 | `NestMiddleware`  | `use(requires,next)`        | Request/Response/Next | 路径（映射）             |
| 异常过滤器 | 类       | 装饰器     | ExceptionFilter   | `catch(exception,host)`     | ArgumentsHost         | 全局、控制器、方法       |
| 管道       | 类       | 装饰器     | `PipeTransform`   | `transform(value,metadata)` | 参数以及参数元数据    | 全局、控制器、方法、参数 |
| 守卫       | 类       | 装饰器     | `CanActivate`     | `canActivate(context)`      | ExecutionContext      | 全局、控制器、方法       |
| 拦截器     | 类       | 装饰器     | `NestInterceptor` | `intercept(context,next)`   | ExecutionContext      | 全局、控制器、方法       |

#### 生命周期

Nest应用程序的生命周期大致可以分为：`初始化`，`运行时`，`结束中` 三个阶段；这三个阶段在整个生命周期中会执行以下特殊方法

| 钩子方法                      | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| `onModuleInit()`              | 模组的依赖被解析完后执行（REQUEST作用域下无效）              |
| `onApplicationBootstrap()`    | 所有模组被初始化完成后，在监听端口之前执行                   |
| `onModuleDestory()`           | 收到终止信号，模组开始销毁之前执行                           |
| `beforeApplicationShutdown()` | 模块销毁过程执行完毕（不论是否成功），一旦完成过程，所有监听的连接会被关闭 |
| `onApplicationShutdown()`     | 连接关闭后执行                                               |

![summary_lifesequence.png](https://cdn.gincool.com/img/d48902afba5044bcacb89ae03b7eb327~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.png)



[1] [深入了解Nest的阶段性总结](https://juejin.cn/post/6946369162507714591)

## 1 常用功能

### 1.1 参数验证【管道】

所需：1.class-validator 2.ValidationPipe

### 1.2 异常统一响应【过滤器】

ExceptionFilter

### 1.3 统一响应格式【拦截器】

如何区分前置|后置拦截器

```ts
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`前置前置`);

    const now = Date.now();
    return next
      .handle()
      .pipe(
      tap(() => console.log(`后置后置`)),
    );
  }
}
```

### 1.4 返回数据序列化【序列化】

typegoose参数序列化，用于支持class-transformer的@Exclude()

```ts
export function defaultModelOptions(collectionName?: string): IModelOptions {
  return {
    schemaOptions: {
      collection: collectionName,
      timestamps: true,
      toJSON: {
        virtuals: true,
        getters: true,
        versionKey: false,
        transform: (doc, ret) =>
        instanceToPlain(plainToInstance(getClass(doc) as any, ret)),
      },
      toObject: { virtuals: true },
      id: true,
      _id: true,
    },
    options: {
      allowMixed: Severity.ALLOW,
    },
  };
}

@modelOptions(defaultModelOptions())
export class BaseSchema {
  public static SCHEMA = null;
  @Exclude()
  @Prop({ type: Schema.Types.ObjectId, auto: true })
  _id: string;

  @Expose()
  @Prop({ type: Number })
  createdAt: number;

  @Expose()
  @Prop({ type: Number })
  updatedAt: number;

  @Expose()
  get id(): BaseSchema['_id'] {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }
}
```

