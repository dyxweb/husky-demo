import React, { useState } from 'react'
import cityImg from './assets/images/city.jpg'

const App = () => {
  const [count, setCount] = useState(0)
  const name = 'dyx';
  return (
    <div>
      <h1>hello world1</h1>
      <h1>{env}</h1>
      {/* <button onClick={() => setCount(count + 1)}>add count</button> */}
      <div>{count}</div>
      <img src={cityImg} />
    </div>
  )
}

export default App
