import UserForm, { UserFormState} from "./components/forms/User"
import { useState, useEffect } from "react"

type User = UserFormState & { id: number} 
function App() {
  const [users, setUsers] = useState<User[]>([])

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: User[] = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
    }, []
  )
  
  return (
  
    <div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <UserForm handleSubmit={user => setUsers([...users, {...user, id: Date.now()}])}/>
    </div>
  )
}

export default App
