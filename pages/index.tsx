import React, { FC } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Counter from '../component/Counter'
import CounterWithReducer from '../component/CounterWithReducer'

interface HomeProps {
  message?: string
}

const Home: FC<HomeProps> = ({ message }) => {
  return (
    <>
      <div>{message}</div>
      <Counter />
      <CounterWithReducer />
    </>
  )
}

Home.defaultProps = {
  message: 'Hello React',
}
export default Home
