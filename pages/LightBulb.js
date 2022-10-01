import styles from '../styles/LightBulb.module.css'
import {useState} from 'react'

export default function LightBulb () {

  const [bulb, setBulb] = useState(false)

  return (
    <div className={ bulb
        ? `${styles.bcontainer} ${styles["on"]}`
        : styles.bcontainer }>
      <div className={styles.light}>
        <div className={styles.wire}></div>
        <div className={styles.bulb}>
          <span></span>
          <span></span>
        </div>
        <div className={styles.switch}>
            <div className={styles.btn} onClick={ () => setBulb(!bulb) }>
            </div>
        </div>
      </div>
    </div>
  )
}