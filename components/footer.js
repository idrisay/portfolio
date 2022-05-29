import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image'

const footer = () => {
  return (
    <footer className={styles.footer}>
    <a
      href="https://github.com/idrisay"
      target="_blank"
      rel="noopener noreferrer"
    >
      Check my Github Account
        <Image src="/github.webp" alt="Github" width={36} height={36} />
    </a>
  </footer>
  )
}

export default footer