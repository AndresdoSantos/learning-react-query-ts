import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { UserDTO } from '../DTOs/UserDTO'
import { api } from '../services/api'

import '../styles/Modal.css'

type ModalProps = {
  show: boolean
  onShowChange: () => void
  user: UserDTO
}

export function Modal({ user, onShowChange, show }: ModalProps) {
  const [value, setValue] = useState(user.name)

  const queryClient = useQueryClient()

  const { isLoading, mutate } = useMutation(
    () => api.put(`/users/${user.id}`, { name: value }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user-list'])

        onShowChange()
      },
    },
  )

  return show ? (
    <div className="modal-overlay">
      <main className="modal-container">
        <header className="modal-header">
          <h4>{user.name}</h4>

          <button onClick={onShowChange}>Fechar</button>
        </header>

        {isLoading && <p>Loading...</p>}

        <input
          type="text"
          className="modal-input"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <button className="" onClick={() => mutate()}>
          Submit
        </button>
      </main>
    </div>
  ) : null
}
