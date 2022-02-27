import React from 'react'
import styled from 'styled-components'
import { AutoRow } from '../Row'
import { Text } from 'rebass'
import { Container } from '@site/src/pages'
import { TYPE } from '../Text'
import workIcon from '@site/static/img/work.png'

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

export default function About() {
  return (
    <Container>
      <AutoRow gap={'60px'} nowrap>
        <Box style={{ flex: 1 }}>
          <TYPE.largeHeader>Hey folks, I'm a</TYPE.largeHeader>
          <TYPE.largeHeader>Software engineer</TYPE.largeHeader>
          <TYPE_Body>
            Building a successful product is a challenge. I am highly energetic in user experience design, interfaces
            and web development.
          </TYPE_Body>
        </Box>

        <Box style={{ flex: 1 }}>
          <Adventer src={workIcon} />
        </Box>
      </AutoRow>
    </Container>
  )
}
