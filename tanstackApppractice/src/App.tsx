import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import Users from "./Usersquery";


const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        The count: {count}
        <button onClick={increment}>Add</button>
        <Users />
      </QueryClientProvider>
    </>
  )
}

export default App