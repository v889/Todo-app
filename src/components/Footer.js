const Footer = ({ getActiveTodo, setFilter, clearCompleteTodo }) => {
  return (
    <div>
      {getActiveTodo()} remaining
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Compelete")}>Compelete</button>
      <button onClick={clearCompleteTodo}>Clear Complete Todo</button>
    </div>
  );
};
export default Footer;
