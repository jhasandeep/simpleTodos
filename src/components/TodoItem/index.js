// Write your code here

const TodoItem = props => {
  const {userDetails, deleteUser} = props

  const {id, title} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
