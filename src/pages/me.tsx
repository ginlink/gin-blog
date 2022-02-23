import Layout from '@theme/Layout'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

export default function Me() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>
          Hey folks, I'm a Web developer Building a successful product is a challenge. I am highly energetic in user
          experience design, interfaces and web development.
        </p>
      </div>
    </Layout>
  )
}
