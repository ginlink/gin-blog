import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

type FeatureItem = {
  title: string
  image: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '计算机知识',
    image: '/img/features/icon1.png',
    description: <>前端、算法、工具、区块链、后端</>,
  },
  {
    title: '另一些热爱',
    image: '/img/features/icon2.png',
    description: <>电影、骑行</>,
  },
  {
    title: '关于我',
    image: '/img/features/icon3.png',
    description: <>一个前端小男孩</>,
  },
]

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={useBaseUrl(image)} />
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
