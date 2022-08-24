import Form from './Form';
import TodoList from './TodoList';

function App() {
 return (
  <main className="bg-blue-900 h-screen flex flex-col items-center pt-20">
   <h1 className="text-white text-5xl tracking-wider py-6">Todo App</h1>
   <Form />
   <TodoList />
  </main>
 );
}

export default App;
