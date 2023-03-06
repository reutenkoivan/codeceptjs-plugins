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

import {HomepageHeader} from './components/HomepageHeader'
import {DisplayAvailablePackages} from "./components/Packages";
import {UsageExample} from "./components/Usage";

export default () => {
  return (
    <Layout>
      <HomepageHeader/>
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.packagesContainer}>
            <DisplayAvailablePackages/>
          </div>
          <div className={styles.featuresContainer}>
            <UsageExample/>
          </div>
        </div>
      </main>
    </Layout>
  )
}
