import './UsersList.css'

const UsersList = ({ usersList }) => {
  return (
    <ul className='list'>
      {usersList.map((user) => (
        <li key={user.id} className='list-item'>
          <div className='name-wraper'>{user.name}</div>
          <div className='age-wraper'>{user.age}</div>
        </li>
      ))}
    </ul>
  )
}

export default UsersList
