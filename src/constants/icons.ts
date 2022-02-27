import icon1 from '@site/static/img/skills/react.png'
import icon2 from '@site/static/img/skills/vue.png'
import icon3 from '@site/static/img/skills/ts.png'
import icon4 from '@site/static/img/skills/nestjs.png'
import icon5 from '@site/static/img/skills/mui.png'
import icon6 from '@site/static/img/skills/antd.png'
import icon7 from '@site/static/img/skills/uniapp.png'
import icon8 from '@site/static/img/skills/next-js.png'
import icon9 from '@site/static/img/skills/git.png'

export type IconProps = {
  icon: string
  label: string
  url: string
}

export const iconsMap: {
  [key: string]: IconProps
} = {
  react: { icon: icon1, label: 'React', url: 'https://reactjs.org/' },
  vue: { icon: icon2, label: 'Vue', url: 'https://cn.vuejs.org/index.html' },
  ts: { icon: icon3, label: 'Typescript', url: 'https://www.typescriptlang.org/' },
  nest: { icon: icon4, label: 'Nestjs', url: 'https://nestjs.com/' },
  mui: { icon: icon5, label: 'Mui', url: 'https://mui.com/' },
  antd: { icon: icon6, label: 'Antd', url: 'https://ant.design/index-cn' },
  uniapp: { icon: icon7, label: 'Uniapp', url: 'https://uniapp.dcloud.io/' },
  next: { icon: icon8, label: 'Nextjs', url: 'https://nextjs.org/' },
  git: { icon: icon9, label: 'Git', url: 'https://github.com/ginlink' },
}

// export const icons: IconProps[] = [
//   { icon: icon1, label: 'React', url: 'https://reactjs.org/' },
//   { icon: icon2, label: 'Vue', url: 'https://cn.vuejs.org/index.html' },
//   { icon: icon3, label: 'Typescript', url: 'https://www.typescriptlang.org/' },
//   { icon: icon4, label: 'Nestjs', url: 'https://nestjs.com/' },
//   { icon: icon5, label: 'Mui', url: 'https://mui.com/' },
//   { icon: icon6, label: 'Antd', url: 'https://ant.design/index-cn' },
//   { icon: icon7, label: 'Uniapp', url: 'https://uniapp.dcloud.io/' },
//   { icon: icon8, label: 'Nextjs', url: 'https://nextjs.org/' },
//   { icon: icon9, label: 'Git', url: 'https://github.com/ginlink' },
// ]

export const icons: IconProps[] = Object.values(iconsMap)
