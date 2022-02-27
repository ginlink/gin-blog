import React, { Fragment } from 'react'
import styled from 'styled-components'
import { AutoRow } from '../Row'
import { TYPE } from '../Text'
import icon1 from '@site/static/img/skills/react.png'
import icon2 from '@site/static/img/skills/vue.png'
import icon3 from '@site/static/img/skills/ts.png'
import icon4 from '@site/static/img/skills/nestjs.png'
import icon5 from '@site/static/img/skills/mui.png'
import icon6 from '@site/static/img/skills/antd.png'
import icon7 from '@site/static/img/skills/uniapp.png'
import icon8 from '@site/static/img/skills/next-js.png'
import icon9 from '@site/static/img/skills/git.png'
import { AutoColumn } from '../Column'
import { Container } from '@site/src/pages'

const icons = [
  { icon: icon1, label: 'React', url: 'https://reactjs.org/' },
  { icon: icon2, label: 'Vue', url: 'https://cn.vuejs.org/index.html' },
  { icon: icon3, label: 'Typescript', url: 'https://www.typescriptlang.org/' },
  { icon: icon4, label: 'Nestjs', url: 'https://nestjs.com/' },
  { icon: icon5, label: 'Mui', url: 'https://mui.com/' },
  { icon: icon6, label: 'Antd', url: 'https://ant.design/index-cn' },
  { icon: icon7, label: 'Uniapp', url: 'https://uniapp.dcloud.io/' },
  { icon: icon8, label: 'Nextjs', url: 'https://nextjs.org/' },
  { icon: icon9, label: 'Git', url: 'https://github.com/ginlink' },
]

const Icon = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`

const IconWrapper = styled.div`
  max-width: 800px;
`

export default function Experience() {
  return (
    <Container>
      <AutoColumn justify={'center'} gap={'32px'}>
        <TYPE.largeHeader>Experience</TYPE.largeHeader>
      </AutoColumn>
    </Container>
  )
}
