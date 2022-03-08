import icon1 from '@site/static/img/projects/icon1.png'
import icon2 from '@site/static/img/projects/icon2.png'

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
    title: 'Token管家',
    desc: `这是一个Dapp应用程序，可以在指定的网络上创建您的Token，或者托管Token发放功能。它在DAPP开发环境中非常有用，省去手动将令牌转移给用户的步骤。`,
    label: 'React,Typescript,Mui,Nestjs',
    url: 'https://github.com/ginlink/coolswap-dashboard',
    showUrl: 'https://dashboard.gincool.com',
    icon: icon1,
  },
  {
    title: '幸运请假',
    desc: `这是一个利用Uniapp搭建的跨平台应用程序，模拟请假，销假等功能。`,
    label: 'Uniapp(vue2.x),uview',
    url: 'https://github.com/ginlink/hapVac',
    showUrl: 'https://github.com/ginlink/hapVac',
    icon: icon2,
  },
]
