import Todo from './Todo';

export default function TodoList({ toDos, deleteToDos, completedHandler }) {
 return (
  <section className="pt-10 ">
   <ul className="w-[32rem] space-y-4">
    {toDos.map((todo) => (
     <Todo key={todo.id} {...todo} deleteToDos={deleteToDos} completedHandler={completedHandler} />
    ))}
   </ul>
  </section>
 );
}
