import { useState } from 'react'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import ErrorModal from './modals/ErrorModal'
import './App.css'

function App() {
  const [usersList, setUsersList] = useState([])
  const [error, setError] = useState(false)
  const [errorType, setErrorType] = useState('')

  const handleError = () => {
    setError(false)
    setErrorType('')
  }

  const addUser = (user) => {
    const nameIsEmpty = !user.name.trim()
    const ageIsEmpty = !user.age.trim()

    if (nameIsEmpty || ageIsEmpty) {
      setError(true)
      setErrorType('empty')
      return
    } else if (+user.age < 1) {
      setError(true)
      setErrorType('age')
      return
    }

    setUsersList((prevState) => [...prevState, user])
  }
  return (
    <div className='app'>
      {error && <ErrorModal onConfirm={handleError} errorType={errorType} />}
      <UserForm addUser={addUser} />
      <UsersList usersList={usersList} />
    </div>
  )
}

export default App
