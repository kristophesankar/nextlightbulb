import styles from '../../styles/LightBulb.module.css'

let handleClick = ({state, send}) => {
  send('TOGGLE')
}

export default function Switch ({state, send}) {
  return (
    <div className={styles.switch}>
        <div className={styles.btn} onClick={ (e) => handleClick({state, send}) }>
        </div>
    </div>
  )
}