import React from 'react'
import clsx from 'clsx'
// @ts-ignore
import Layout from '@theme/Layout'
// @ts-ignore
import Link from '@docusaurus/Link'
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// @ts-ignore
import styles from './styles.module.css'

import { HomepageHeader } from './components/HomepageHeader'

export default () => {
  return (
    <Layout>
      <HomepageHeader/>
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.cardContainer}>
            <Link to='/base'>
              <div className={clsx('card shadow--lw', styles.card)}>
                <h4>Base</h4>
              </div>
            </Link>
            <Link to='/html-snapshot-on-fail'>
              <div className={clsx('card shadow--lw', styles.card)}>
                <h4>HTML snapshot on fail</h4>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}
