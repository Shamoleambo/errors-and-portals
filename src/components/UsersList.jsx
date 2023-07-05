const UsersList = ({ usersList }) => {
  return (
    <ul>
      {usersList.map((user) => (
        <li key={user.id}>
          {user.name} {user.age}
        </li>
      ))}
    </ul>
  )
}

export default UsersList
