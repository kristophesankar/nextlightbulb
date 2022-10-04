import styles from '../styles/LightBulb.module.css'
import  Switch  from './components/Switch'

export default function LightBulb ({state, send}) {
  return (
    <div className={ state.matches("lit")
        ? `${styles.bcontainer} ${styles["on"]}`
        : styles.bcontainer }>
      <div className={styles.light}>
        <div className={styles.wire}></div>
        <div className={styles.bulb}>
          <span></span>
          <span></span>
        </div>
        <Switch state={state} send={send} />
      </div>
    </div>
  )
}