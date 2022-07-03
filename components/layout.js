import Sidebar from './sidebar'
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar/>
      <main>{children}</main>
    </div>
  )
}