import { useRef } from 'react'
import './UserForm.css'

const UserForm = ({ addUser }) => {
  const nameInput = useRef()
  const ageInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = nameInput.current.value
    const age = ageInput.current.value
    const id = Math.floor(Math.random() * 1000)

    addUser({ id, name, age })
    nameInput.current.value = ''
    ageInput.current.value = ''
  }

  return (
    <form className='userForm' onSubmit={handleSubmit}>
      <h1>Users List</h1>
      <div className='form-fields'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' ref={nameInput} />
        </div>
        <div className='form-group'>
          <label htmlFor='age'>Age</label>
          <input type='number' id='age' ref={ageInput} />
        </div>
      </div>
      <button type='submit'>Add User</button>
    </form>
  )
}

export default UserForm
