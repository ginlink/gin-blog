import React from 'react'
import styled from 'styled-components'
import { AutoRow } from '../Row'
import { Text } from 'rebass'
import { Container, Grid } from '@site/src/pages'
import { TYPE } from '../Text'
import workIcon from '@site/static/img/work.png'
import Translate from '@docusaurus/Translate'

export const Box = styled.div`
  padding: 30px 30px;
`

const TYPE_Header = styled(Text)`
  font-size: 40px;
`

const TYPE_Body = styled(Text)`
  font-size: 16px;
`

const Adventer = styled.img`
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
`
const MyRow = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  /* & > :not(style) + :not(style) {
    margin-left: ${({ gap }) => gap};
  } */
`

export default function About() {
  return (
    <Container>
      <MyRow gap={'8px'}>
        <Grid xs={12} sm={6}>
          <TYPE.largeHeader>
            <Translate>Hello, I'm a</Translate>
          </TYPE.largeHeader>
          <TYPE.largeHeader>
            <Translate>blockchain front-end development engineer</Translate>
          </TYPE.largeHeader>
          <TYPE_Body>
            <Translate>
              I'm Gin and building a successful product is a challenge. I am very active in user experience design,
              interface and web development. I like JavaScript very much. It is very flexible and brings fun to my life!
            </Translate>
          </TYPE_Body>
        </Grid>

        <Grid xs={12} sm={6}>
          <Adventer src={workIcon} />
        </Grid>
      </MyRow>
    </Container>
  )
}
