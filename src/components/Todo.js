const Todo = ({ todo, handleTodoComplete, handleDeleteTask }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => handleTodoComplete(todo.id)}
      />
      <span>{todo.task}</span>
      <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
    </div>
  );
};
export default Todo;
