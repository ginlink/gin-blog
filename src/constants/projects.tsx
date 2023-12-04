import Translate from '@docusaurus/Translate'
import icon1 from '@site/static/img/projects/icon1.png'
import icon2 from '@site/static/img/projects/icon2.png'
import icon3 from '@site/static/img/projects/icon3.png'
import React from 'react'

export type ProjectItem = {
  title: React.ReactNode
  desc: React.ReactNode
  label: string
  url: string
  showUrl: string
  icon: string
}

export const projects: ProjectItem[] = [
  // {
  //   title: <Translate>Coolswap</Translate>,
  //   desc: (
  //     <Translate>
  //       Multi-chain DEX based on UniswapV2 changes now supports Kcc, Bsc, Heco test net, mainly used in test
  //       environment, users can exchange coins. The project is organized using Monorepo and contains the main program, as
  //       well as an ESLint configuration and UI library. UI library is managed by Storebook.
  //     </Translate>
  //   ),
  //   label: 'React,Typescript,UniswapV2,Monorepo',
  //   url: 'https://github.com/ginlink/swap',
  //   showUrl: 'https://swap.gincool.com',
  //   icon: icon3,
  // },
  // {
  //   title: <Translate>Token manager</Translate>,
  //   desc: (
  //     <Translate>
  //       This is a Dapp application that can create your Token on a specified network or host Token provisioning
  //       functionality. It is useful in a DAPP development environment, eliminating the need to manually transfer tokens
  //       to the user. A simple CRUD interface that conforms to the restful specification is implemented through Nestjs.
  //     </Translate>
  //   ),
  //   label: 'React,Typescript,Mui,Nestjs',
  //   url: 'https://github.com/ginlink/coolswap-dashboard',
  //   showUrl: 'https://dashboard.gincool.com',
  //   icon: icon1,
  // },
  {
    title: <Translate>Hap vacation</Translate>,
    desc: (
      <Translate>
        This is a cross-platform application built by Uniapp, which is mainly used on wechat mini program, simulating
        leave, cancellation and other functions. Day live 200 +.
      </Translate>
    ),
    label: 'Uniapp(vue2.x),uview',
    url: 'https://github.com/ginlink/hapVac',
    showUrl: 'https://github.com/ginlink/hapVac',
    icon: icon2,
  },
]
