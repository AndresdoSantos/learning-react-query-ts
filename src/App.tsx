import { useEffect, useState } from 'react'
import { User } from './components/User'
import { UserDTO } from './DTOs/UserDTO'
import { api } from './services/api'

import './styles/App.css'

function App() {
  const [userList, setUserList] = useState([] as UserDTO[])

  async function getUsers() {
    const { data } = await api.get<UserDTO[]>('users')

    setUserList(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <h1>User List</h1>

      <ul className="list">
        {userList.map((user) => (
          <User {...user} />
        ))}
      </ul>
    </div>
  )
}

export default App
