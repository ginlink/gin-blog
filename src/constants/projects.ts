import icon1 from '@site/static/img/projects/icon1.png'
import icon2 from '@site/static/img/projects/icon2.png'
import icon3 from '@site/static/img/projects/icon3.png'

export type ProjectItem = {
  title: string
  desc: string
  label: string
  url: string
  showUrl: string
  icon: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Coolswap',
    desc: `基于UniswapV2更改的多链DEX，目前支持Kcc, Bsc, Heco的测试网，主要用于测试环境下，用户可以通过交换获取硬币。项目使用monorepo组织，包含主程序，以及一个eslint配置库和ui库。UI库采用storebook管理。`,
    label: 'React,Typescript,UniswapV2,Monorepo',
    url: 'https://github.com/ginlink/swap',
    showUrl: 'https://swap.gincool.com',
    icon: icon3,
  },
  {
    title: 'Token管家',
    desc: `这是一个Dapp应用程序，可以在指定的网络上创建您的Token，或者托管Token发放功能。它在DAPP开发环境中非常有用，省去手动将令牌转移给用户的步骤。通过Nestjs实现简单的符合restful规范的CRUD接口。`,
    label: 'React,Typescript,Mui,Nestjs',
    url: 'https://github.com/ginlink/coolswap-dashboard',
    showUrl: 'https://dashboard.gincool.com',
    icon: icon1,
  },
  {
    title: '幸运请假',
    desc: `这是一个利用Uniapp搭建的跨平台应用程序，主要在微信小程序上使用，模拟请假，销假等功能。日活200+。`,
    label: 'Uniapp(vue2.x),uview',
    url: 'https://github.com/ginlink/hapVac',
    showUrl: 'https://github.com/ginlink/hapVac',
    icon: icon2,
  },
]
