import React from 'react'
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import clsx from 'clsx'
// @ts-ignore
import styles from './HomepageHeader.module.css'

export const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={styles.heroBanner}>
      <div className={'margin-horiz--md'}>
        {/* from '../../../assets/logo.png'*/}
        <img src={'./logo.png'}  alt={'logo'} className={styles.logo}/>
      </div>
      <div>
        <h1 className={clsx('hero__title', styles.heroTitle)}>@{siteConfig.title.toLowerCase()}</h1>
        <h4 className='hero__subtitle'>Set of plugins for the CodeceptJS framework written in an object-oriented way.</h4>
      </div>
    </header>
  )
}
