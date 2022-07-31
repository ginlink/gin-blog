import React, { Fragment } from 'react'
import styled from 'styled-components'
import { AutoRow } from '../Row'
import { TYPE } from '../Text'
import { AutoColumn } from '../Column'
import { Container } from '@site/src/pages'
import { icons } from '@site/src/constants/icons'
import Translate from '@docusaurus/Translate'

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

const StyledAutoColumn = styled(AutoColumn)`
  width: 160px;
  @media screen and (max-width: 540px) {
    width: 32%;
  }
`

export default function Skills() {
  return (
    <Container>
      <AutoColumn justify={'center'} gap={'32px'}>
        <TYPE.largeHeader>
          <Translate>Technical skills</Translate>
        </TYPE.largeHeader>

        <IconWrapper>
          <AutoRow gap={'16px'} style={{ justifyContent: 'space-evenly' }}>
            {icons.map(({ icon, label, url }) => {
              return (
                <Fragment key={icon}>
                  <StyledAutoColumn justify={'center'} gap={'8px'}>
                    <a href={url} target="_blank">
                      <Icon src={icon} />
                    </a>
                    <TYPE.body>{label}</TYPE.body>
                  </StyledAutoColumn>
                </Fragment>
              )
            })}
          </AutoRow>
        </IconWrapper>
      </AutoColumn>
    </Container>
  )
}
