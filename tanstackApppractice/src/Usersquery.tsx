import { useQuery } from "@tanstack/react-query"
import axios from "axios"

async function fetchUsers() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

function Users() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers

    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Erro...</div>

    return (
        <div>{data.map((user: { id: number; name: string }) => <div key={user.id}>{user.name}</div>)}</div>
    )

}

export default Users