const Input = ({ handleAddInput, handleAddTask, inputTodo }) => {
  return (
    <>
      <input
        onChange={(e) => handleAddInput(e.target.value)}
        type="text"
        value={inputTodo}
      />
      <button onClick={handleAddTask}>ADD</button>
    </>
  );
};
export default Input;
