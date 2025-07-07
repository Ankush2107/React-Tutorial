function Counter1({ count, setCount }) {
  return (
    <div>
        <h1>Counter 1</h1>
      <button onClick={() => setCount(count + 1) }>
        Click me {count}
      </button>
    </div>
  )
}
export default Counter1;