import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'
import Translate from '@docusaurus/Translate'

type FeatureItem = {
  title: React.ReactNode
  image: string
  description: React.ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Computeracy</Translate>,
    image: '/img/features/icon1.png',
    description: <Translate>Front-end, algorithms, tools, blockchain, back-end</Translate>,
  },
  {
    title: <Translate>Other passions</Translate>,
    image: '/img/features/icon2.png',
    description: <Translate>Movies, cycling</Translate>,
  },
  {
    title: <Translate>About me</Translate>,
    image: '/img/features/icon3.png',
    description: <Translate>A little front end boy</Translate>,
  },
]

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title as string} src={useBaseUrl(image)} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
