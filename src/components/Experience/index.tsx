import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Container } from '@site/src/pages'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { AutoColumn } from '../Column'
import { TYPE } from '../Text'
import styled from 'styled-components'

const Wrapper = styled.div``
const Img = styled.img`
  border-radius: 50%;
`

export default function Experience() {
  return (
    <Wrapper>
      <Container>
        <AutoColumn justify={'center'} gap={'32px'}>
          <TYPE.largeHeader>Experience</TYPE.largeHeader>

          <VerticalTimeline lineColor={'#36cfc9'}>
            <VerticalTimelineElement
              className={'timeline-card'}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={<TYPE.gray color={'var(--ifm-navbar-link-color)'}>2017.9 - 2021.6</TYPE.gray>}
              icon={<Img src={useBaseUrl('/img/nangong.png')} />}
            >
              <h3>南阳理工学院</h3>
              <h4>本科</h4>
              <p>在校四年，学习计算机基础和前端知识</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: 'var(--ifm-background-color)' }}
              date="2021.7 - 至今"
              icon={<Img src={useBaseUrl('/img/skills/dapp.png')} />}
            >
              <h3>深圳云海思航科技有限公司</h3>
              <h4>深圳，区块链前端工程师</h4>
              <p>负责dapp程序开发</p>
              <p>负责前端联调合约</p>
              <p>负责静态页面开发</p>
              <p>负责面试</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </AutoColumn>
      </Container>
    </Wrapper>
  )
}
