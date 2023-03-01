import React from 'react'
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import clsx from 'clsx'
// @ts-ignore
import styles from './HomepageHeader.module.css'

export const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className={clsx('hero__title', styles.heroTitle)}>@{siteConfig.title.toLowerCase()}</h1>
        <h4 className='hero__subtitle'>Set of plugins for the CodeceptJS framework written in object oriented way</h4>
      </div>
    </header>
  )
}
