import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import styled from 'styled-components'
import { AutoRow } from '../components/Row'
import { Icon } from '@iconify/react'
import { description } from '../constants/misc'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const xs = 0
export const sm = 600

export const Grid = styled.div<{ xs?: number; sm?: number }>`
  width: 100%;

  @media (min-width: ${xs}px) {
    width: ${({ xs }) => xs && (xs * 8.33).toFixed(2) + '%'};
  }

  @media (min-width: ${sm}px) {
    width: ${({ sm }) => sm && (sm * 8.33).toFixed(2) + '%'};
  }
`

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <AutoRow gap={'8px'} justify={'center'}>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              <AutoRow gap={'8px'}>
                <Icon icon="la:blog" />
                Blog
              </AutoRow>
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/me">
              <AutoRow gap={'8px'}>
                {/* <Icon icon="carbon:view" /> */}
                <Icon icon="carbon:view-filled" />
                Me
              </AutoRow>
            </Link>
          </div>
        </AutoRow>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description={description}>
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
