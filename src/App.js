import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/TodoList';
import Form from './components/Form';
import TodoActions from './components/TodoActions';

function App() {
 const [toDos, setToDos] = useState([
  {
   id: uuidv4(),
   text: 'This is a todo',
   completed: false,
  },
 ]);
 const [error, setError] = useState(false);

 const addToDos = (value) => {
  if (value) {
   setError(false);
   const newToDos = [...toDos];

   newToDos.push({
    id: uuidv4(),
    text: value,
    completed: false,
   });
   setToDos(newToDos);
  } else {
   setError(true);
  }
 };

 const resetHandler = () => {
  setToDos([]);
  setError(false);
 };

 const removeCompleteHandler = () => {
  setToDos(toDos.filter((todo) => !todo.completed));
 };

 const deleteToDos = (id) => {
  const newToDos = toDos.filter((todo) => todo.id !== id);

  setToDos(newToDos);
 };

 const completedHandler = (id) => {
  const newToDos = toDos.map((todo) =>
   todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo },
  );

  setToDos(newToDos);
 };

 useEffect(() => {
  const timer = setTimeout(() => {
   setError(false);
  }, 5000);

  return () => {
   clearTimeout(timer);
  };
 }, [error]);

 return (
  <main className="bg-blue-900 h-screen flex flex-col items-center pt-20">
   <h1 className="text-white text-5xl tracking-wider py-6">Todo App</h1>
   <Form addToDos={addToDos} />
   <TodoActions resetHandler={resetHandler} removeCompleteHandler={removeCompleteHandler} />
   {error && <p className="text-red-500 pt-4">Add some text...</p>}

   {toDos <= 0 ? (
    <p className="text-white text-3xl pt-10">Todo list is empty</p>
   ) : (
    <TodoList toDos={toDos} deleteToDos={deleteToDos} completedHandler={completedHandler} />
   )}
  </main>
 );
}

export default App;
