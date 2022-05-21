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
  background-color: var(--ifm-background-color);
  border-radius: 10px;

  max-height: 420px;
  overflow-y: auto;
`
const StyledIcon = styled(Icon)`
  font-size: 32px;
  cursor: pointer;
`
const ImgWrapper = styled(RowCenter)`
  max-height: 200px;
`
const Img = styled.img`
  /* width: 100%; */
  height: 100%;
`
function Project({ title, desc, label, url, showUrl, icon }: ProjectItem) {
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

        <AutoRow gap={'3px'}>
          {label.split(',').map((x, index) => {
            return (
              <TYPE.body fontWeight={'bold'} key={index}>
                {x}
              </TYPE.body>
            )
          })}
        </AutoRow>

        <ImgWrapper>
          <Img src={icon} style={{ cursor: 'pointer' }} />
        </ImgWrapper>
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
