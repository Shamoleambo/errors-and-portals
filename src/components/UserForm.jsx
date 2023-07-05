import { useState } from 'react'

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = Math.floor(Math.random() * 1000)
    addUser({ id, name, age })
    setName('')
    setAge('')
  }

  return (
    <form className='userForm' onSubmit={handleSubmit}>
      <h1>Add User</h1>
      <div className='form-fields'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            id='age'
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
      </div>
      <button type='submit'>Add User</button>
    </form>
  )
}

export default UserForm
