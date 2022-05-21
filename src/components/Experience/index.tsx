import React from 'react'
import { Container } from '@site/src/pages'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { AutoColumn } from '../Column'
import { TYPE } from '../Text'

export default function Experience() {
  return (
    <Container>
      <AutoColumn justify={'center'} gap={'32px'}>
        <TYPE.largeHeader>Experience</TYPE.largeHeader>

        <VerticalTimeline lineColor={'#36cfc9'}>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={<TYPE.gray color={''}>2011 - present</TYPE.gray>}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<div>icon</div>}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<div>icon</div>}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </AutoColumn>
      {/* <TimeLine /> */}
    </Container>
  )
}
