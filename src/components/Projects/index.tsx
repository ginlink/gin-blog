import React, { Fragment, ReactNode } from 'react'
import styled from 'styled-components'
import { AutoRow, RowBetween, RowCenter } from '../Row'
import { TYPE } from '../Text'
import { AutoColumn } from '../Column'
import { Container } from '@site/src/pages'
import { Icon } from '@iconify/react'
import { ProjectItem, projects } from '@site/src/constants/projects'

const ItemWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;
`
const StyledIcon = styled(Icon)`
  font-size: 32px;
  cursor: pointer;
`
const Img = styled.img`
  /* width: 100%; */
  height: 100%;
`
function Project({ title, desc, label, url, showUrl }: ProjectItem) {
  return (
    <ItemWrapper>
      <AutoColumn gap={'16px'}>
        <RowBetween>
          <StyledIcon icon={'akar-icons:folder'}></StyledIcon>
          <AutoRow gap={'8px'}>
            <a href={url} target="_blank">
              <StyledIcon icon={'akar-icons:github-fill'}></StyledIcon>
            </a>
            <a href={showUrl} target="_blank">
              <StyledIcon icon={'bx:link-external'}></StyledIcon>
            </a>
          </AutoRow>
        </RowBetween>
        <AutoColumn>
          <TYPE.subHeader>{title}</TYPE.subHeader>
          <TYPE.body>{desc}</TYPE.body>
        </AutoColumn>
        <TYPE.body>{label}</TYPE.body>

        <Img src={'https://tom-young-portfolio.vercel.app/images/hero-image.svg'} style={{ cursor: 'pointer' }} />
      </AutoColumn>
    </ItemWrapper>
  )
}

export default function Projects() {
  return (
    <Container>
      <AutoColumn justify={'center'} gap={'32px'}>
        <TYPE.largeHeader>Projects</TYPE.largeHeader>

        <AutoRow gap={'8px'} style={{ justifyContent: 'center' }}>
          {projects.map((item) => {
            return (
              <Fragment key={item.title}>
                <Project {...item} />
              </Fragment>
            )
          })}
        </AutoRow>
      </AutoColumn>
    </Container>
  )
}
