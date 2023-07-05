const UsersList = ({ usersList }) => {
  return (
    <ul>
      {usersList.map((user) => (
        <li key={user.name}>
          {user.name} {user.age}
        </li>
      ))}
    </ul>
  )
}

export default UsersList
