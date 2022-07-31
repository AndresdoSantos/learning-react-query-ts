import { useQuery } from '@tanstack/react-query'

import { User } from './components/User'
import { UserDTO } from './DTOs/UserDTO'
import { api } from './services/api'

import './styles/App.css'

function App() {
  const { data, error, isLoading } = useQuery(['user-list'], () =>
    api.get<UserDTO[]>('users'),
  )

  return (
    <div className="container">
      {error ? (
        <p>{JSON.stringify(error)}</p>
      ) : (
        <>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <>
              <h1>User List</h1>

              <ul className="list">
                {data?.data.map((user) => (
                  <User {...user} />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default App
