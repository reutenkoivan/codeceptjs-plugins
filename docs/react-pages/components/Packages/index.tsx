import React from "react";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import styles from "./packages.module.css";

const packages = [
  {
    name: 'base',
    link: '/base',
  },
  {
    name: 'html-snapshot-on-fail',
    link: '/html-snapshot-on-fail',
  }
]

export const DisplayAvailablePackages = () => {
  return <div className={styles.container}>
    {packages.map((item, index) => (
      <Link to={item.link} key={index} className={styles.card}>
        <div>
          <h4>{item.name}</h4>
        </div>
      </Link>
    ))
  }</div>
}
