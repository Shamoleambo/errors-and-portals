import { useState } from 'react'

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addUser({ name, age })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add User</h1>
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
      <button type='submit'>Add User</button>
    </form>
  )
}

export default UserForm
