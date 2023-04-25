# [Clash for linux 教程](https://go.runba.cyou/doc/#/linux/clash?id=clash-for-linux-教程)

## [安装 clash for linux](https://go.runba.cyou/doc/#/linux/clash?id=安装-clash-for-linux)

下载最新版本 clash：https://github.com/Dreamacro/clash/releases

![39509-crg2bid6yj.png](https://cdn.gincool.com/img/1946477.png)

根据你的Linux版本选择相应的下载，我这里直接通过 wget 下载 clash-linux-386 版本。如果 wget 下载不了的话，就用浏览器手工下载吧。

```markup
wget -O clash.gz https://github.com/Dreamacro/clash/releases/download/v1.11.8/clash-linux-386-v1.11.8.gz点击拷贝拷贝失败拷贝成功
```

或者从本站下载: [clash-linux-386.gz](https://go.runba.cyou/ssr-download/clash-linux-386.gz)

解压到当前文件夹

```markup
gzip -f clash.gz -d 点击拷贝拷贝失败拷贝成功
```

授权可执行权限

```markup
chmod +x clash点击拷贝拷贝失败拷贝成功
```

初始化执行 clash

```markup
./clash 点击拷贝拷贝失败拷贝成功
```

初始化执行 clash 会默认在 `~/.config/clash/` 目录下生成配置文件和全球IP地址库：`config.yaml` 和 `Country.mmdb`

如果这一步`Country.mmdb`不能自动完成下载，可以手工下载：

https://github.com/Dreamacro/maxmind-geoip/releases/latest/download/Country.mmdb

或者从本站下载: [Country.mmdb](https://go.runba.cyou/ssr-download/Country.mmdb)

后放到 `~/.config/clash/` 目录。

然后按 Ctrl+c 退出clash程序。

## [下载 clash 配置文件](https://go.runba.cyou/doc/#/linux/clash?id=下载-clash-配置文件)

此处将显示您的V2free机场的Clash订阅链接，请注意为登录状态：

**订阅链接：**[[点击下载配置\]](https://v1.v2free.top/link/ZY55DGN1GYOkrSgu?clash=1)，或高亮选中下面的链接并拷贝后备用：
`https://v1.v2free.top/link/ZY55DGN1GYOkrSgu?clash=1`

这个 **订阅链接** 非常重要，你应当把它当做密码一样妥善保管。

安全提示：本站 **Clash订阅** 已默认实现国内外流量分流，一般国内网站不走代理。

用wget下载clash配置文件，替换默认的配置文件，下面的wget命令后面的 `你的Clash订阅链接网址` ，用上面的实际的clash订阅链接替换

```markup
wget -U "Mozilla/6.0" -O ~/.config/clash/config.yaml  你的Clash订阅链接网址点击拷贝拷贝失败拷贝成功
```

然后，再次启动clash

```markup
./clash点击拷贝拷贝失败拷贝成功
```

## [配置Linux 或者 浏览器使用Clash代理，以 ubunutu 为例](https://go.runba.cyou/doc/#/linux/clash?id=配置linux-或者-浏览器使用clash代理，以-ubunutu-为例)

安全提示：本站 **Clash订阅** 已默认实现国内外流量分流，一般国内网站不走代理。

同時启用 HTTP 代理和 Socks5 代理。

clash 默认 http 端口默认监听 7890 , socks5 端口默认监听 7891

打开 设置 -> 网络 -> 网络代理

配置 HTTP 代理和 socket 代理 分别为上面的端口号(**注意：Linux命令行的程序或shell脚本不一定遵循此处代理设置，设置命令行的代理请看后文**)

![69564-fy7u3i5sqhl.png](https://cdn.gincool.com/img/574938345.png)

## [Linux命令行设置代理](https://go.runba.cyou/doc/#/linux/clash?id=linux命令行设置代理)

Linux命令行的程序或shell脚本不一定遵循上述代理设置，因此需要单独设置命令行的代理。

在Linux命令行中设置代理，可以通过设置环境变量http_proxy和https_proxy来实现：

```markup
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"点击拷贝拷贝失败拷贝成功
```

如果需要取消代理，可以使用以下命令：

```markup
unset http_proxy
unset https_proxy点击拷贝拷贝失败拷贝成功
```

以上命令只对当前终端窗口有效，如果希望永久性的设置代理，可以将以上命令添加到.bashrc文件中。

[Clash Web 管理](https://go.runba.cyou/doc/#/linux/clashweb.html)