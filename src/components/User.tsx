import '../styles/User.css'

import { UserDTO } from '../DTOs/UserDTO'

type UserProps = {
  onSelectUser: (e: UserDTO) => void
  user: UserDTO
}

export function User({ user, onSelectUser }: UserProps) {
  return (
    <li key={user.id} className="user-container">
      <p>{user.name}</p>

      <button onClick={() => onSelectUser(user)}>Editar</button>
    </li>
  )
}
