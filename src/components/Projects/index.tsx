import React, { Fragment, ReactNode } from 'react'
import styled from 'styled-components'
import { AutoRow, RowBetween, RowCenter } from '../Row'
import { TYPE } from '../Text'
import { AutoColumn } from '../Column'
import { Container } from '@site/src/pages'
import { Icon } from '@iconify/react'
import { ProjectItem, projects } from '@site/src/constants/projects'
import Translate from '@docusaurus/Translate'

const ItemWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 16px;
  background-color: var(--ifm-navbar-background-color);
  border-radius: 10px;
`
const StyledIcon = styled(Icon)`
  font-size: 32px;
  cursor: pointer;
`
const ImgWrapper = styled(RowCenter)`
  width: 100%;
`
const Img = styled.img`
  width: 100%;
`

const StyledAutoRow = styled(AutoRow)`
  justify-content: space-between;
  align-items: stretch;
  padding-left: 104px;
  padding-right: 104px;

  @media screen and (max-width: 540px) {
    padding-left: 0;
    padding-right: 0;
  }
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
            if (index === label.split(',').length - 1) {
              return (
                <TYPE.body fontWeight={'bold'} key={index}>
                  {x}
                </TYPE.body>
              )
            }

            return (
              <TYPE.body fontWeight={'bold'} key={index}>
                {x} {'+'}
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
        <TYPE.largeHeader>
          <Translate>Projects</Translate>
        </TYPE.largeHeader>

        <StyledAutoRow gap={'16px'}>
          {projects.map((item, index) => {
            return (
              <Fragment key={index}>
                <Project {...item} />
              </Fragment>
            )
          })}
        </StyledAutoRow>
      </AutoColumn>
    </Container>
  )
}
