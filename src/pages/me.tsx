import Layout from '@theme/Layout'
import React from 'react'
import styled from 'styled-components'
import About from '../components/About'
import { AutoColumn } from '../components/Column'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import { AutoRow } from '../components/Row'
import Skills from '../components/Skills'

const Wrapper = styled.div``

const Card = styled.div<{ bgcolor?: string }>`
  padding: 70px;
  /* min-height: calc(100vh - 3.75rem); */
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : 'unset')};
`

export default function Me() {
  return (
    <Layout title="Hello">
      <Wrapper>
        <AutoColumn>
          <Card bgcolor={'#36cfc9'}>
            <About />
          </Card>
          <Card bgcolor={''}>
            <Skills />
          </Card>
          <Card bgcolor={'#36cfc9'}>
            <Projects />
          </Card>
          {/* <Card bgcolor={''}>
            <Experience />
          </Card> */}
        </AutoColumn>
      </Wrapper>
    </Layout>
  )
}
