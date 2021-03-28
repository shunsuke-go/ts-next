import React, { FC, useState } from 'react'

const Counter: FC<{}> = () => {
  const [value, setValue] = useState<number>(0)

  return (
    <>
      <div>value : {value}</div>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </>
  )
}

export default Counter
