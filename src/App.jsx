import { useState } from 'react'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUser = (user) => {
    setUsersList((prevState) => [...prevState, user])
  }
  return (
    <div>
      <UserForm addUser={addUser} />
      <UsersList usersList={usersList} />
    </div>
  )
}

export default App
