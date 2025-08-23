import { useEffect, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    const newVal = count + 1
    console.log(`Previous Value: ${count}`)
    setCount(count + 1)
    console.log(`After Value: ${newVal}`)

  }
  useEffect(() => {
   console.log(`After Useeffect: ${count}`)
  }, [count])


  return (
    <>
      The count: {count}
      <button onClick={increment}>Add</button>

    </>
  )
}

export default App