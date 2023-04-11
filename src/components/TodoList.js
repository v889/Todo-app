import Todo from "./Todo";
const TodoList = ({ handlefilter, handleDeleteTask, handleTodoComplete }) => {
  return (
    <div>
      {handlefilter().length > 0 ? (
        handlefilter().map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleTodoComplete={handleTodoComplete}
            handleDeleteTask={handleDeleteTask}
          />
        ))
      ) : (
        <p>No task to show</p>
      )}
    </div>
  );
};
export default TodoList;
