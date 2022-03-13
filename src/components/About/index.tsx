import React from 'react'
import styled from 'styled-components'
import { AutoRow } from '../Row'
import { Text } from 'rebass'
import { Container, Grid } from '@site/src/pages'
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
          <TYPE.largeHeader>你好，我是一名</TYPE.largeHeader>
          <TYPE.largeHeader>区块链前端开发工程师</TYPE.largeHeader>
          <TYPE_Body>
            我是Gin，构建一个成功的产品是一个挑战。我在用户体验设计、界面和网页开发方面非常活跃。非常喜欢JavaScript这门语言，十分灵活，并给我的生活带来乐趣！
          </TYPE_Body>
        </Grid>

        <Grid xs={12} sm={6}>
          <Adventer src={workIcon} />
        </Grid>
      </MyRow>
    </Container>
  )
}
