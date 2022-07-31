import { UserDTO } from '../DTOs/UserDTO'

type UserProps = UserDTO

export function User({ id, name }: UserProps) {
  return (
    <li key={id}>
      <p>{name}</p>
    </li>
  )
}
