import React, { useState } from "react"

export default () => {
  const [count, setCount] = useState(0)

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const buttonStyles = {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: '#0004',
    border: 0,
    cursor: 'pointer',
    margin: '0 4px'
  }

  function subtract() {
    if(count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div style={styles}>
      <button onClick={subtract} style={buttonStyles}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)} style={buttonStyles}>+</button>
    </div>
  )
}
