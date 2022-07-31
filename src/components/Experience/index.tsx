import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Container } from '@site/src/pages'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { AutoColumn } from '../Column'
import { TYPE } from '../Text'
import styled from 'styled-components'
import Translate, { translate } from '@docusaurus/Translate'

const Wrapper = styled.div``
const Img = styled.img`
  border-radius: 50%;
`

export default function Experience() {
  return (
    <Wrapper>
      <Container>
        <AutoColumn justify={'center'} gap={'32px'}>
          <TYPE.largeHeader>
            <Translate>Experience</Translate>
          </TYPE.largeHeader>

          <VerticalTimeline lineColor={'#36cfc9'}>
            <VerticalTimelineElement
              className={'timeline-card'}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={<TYPE.gray color={'var(--ifm-navbar-link-color)'}>2017.9 - 2021.6</TYPE.gray>}
              icon={<Img src={useBaseUrl('/img/nangong.png')} />}
            >
              <h3>
                <Translate>Nanyang Institute of Technology</Translate>
              </h3>
              <h4>
                <Translate>Undergraduate</Translate>
              </h4>
              <p>
                <Translate>Four years in school, learning computer basic and front-end knowledge</Translate>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: 'var(--ifm-background-color)' }}
              date={translate({ message: '2021.7 - Now' })}
              icon={<Img src={useBaseUrl('/img/skills/dapp.png')} />}
            >
              <h3>
                <Translate>Shenzhen Yunhai Sihang Technology Co. LTD</Translate>
              </h3>
              <h4>
                <Translate>Shenzhen, blockchain front-end engineer</Translate>
              </h4>
              <p>
                <Translate>Responsible for DAPP program development</Translate>
              </p>
              <p>
                <Translate>Responsible for the front end interagency contract</Translate>
              </p>
              <p>
                <Translate>Responsible for static page development</Translate>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </AutoColumn>
      </Container>
    </Wrapper>
  )
}
