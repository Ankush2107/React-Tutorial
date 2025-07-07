import React from 'react'

function Counter2({ count, setCount }) {
  return (
    <div>
        <h1>Counter 2</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
    </div>
  )
}

export default Counter2
