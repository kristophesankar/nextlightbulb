import LightBulb from './LightBulb'
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

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

export default function Home() {

  const [state, send] = useMachine(lightbulbMachine)

  return (
    <div>
      <LightBulb state={state} send={send}/>
    </div>
  )
}
