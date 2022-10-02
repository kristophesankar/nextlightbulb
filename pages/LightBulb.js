import styles from '../styles/LightBulb.module.css'
import {useState} from 'react'
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";

const lightbulbMachine = createMachine({
  id: "lightbulb",
  initial: "unlit",
  states: {
    unlit: {
      on: { TOGGLE: "lit" }
    },
    lit: {
      on: { TOGGLE: "unlit" }
    }
  }
});

export default function LightBulb () {
  const [state, send] = useMachine(lightbulbMachine);
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
        <div className={styles.switch}>
            <div className={styles.btn} onClick={ () => send('TOGGLE') }>
            </div>
        </div>
      </div>
    </div>
  )
}