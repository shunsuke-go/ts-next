import React, { FC, useReducer } from 'react'

type StateType = { count: number }

type ActionType = { type: 'increment' | 'decrement' | 'reset' }

const initialState: StateType = { count: 0 }

const reducer = (state: StateType, action: ActionType): StateType | never => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
    default:
      throw new Error()
  }
}

const CounterWithReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>Counter: {state.count}</div>

      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  )
}

export default CounterWithReducer
