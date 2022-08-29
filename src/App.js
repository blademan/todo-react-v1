import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/TodoList';
import Form from './components/Form';
import TodoActions from './components/TodoActions';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
 const [localStorage, setLocalStorage] = useLocalStorage('toDos', [
  {
   id: uuidv4(),
   text: 'test',
   completed: false,
  },
 ]);

 const [error, setError] = useState(false);

 const addToDos = (value) => {
  if (value) {
   setError(false);
   const newToDos = [...localStorage];

   newToDos.push({
    id: uuidv4(),
    text: value,
    completed: false,
   });
   setLocalStorage(newToDos);
  } else {
   setError(true);
  }
 };

 const resetHandler = () => {
  setLocalStorage([]);

  setError(false);
 };

 const removeCompleteHandler = () => {
  setLocalStorage(localStorage.filter((todo) => !todo.completed));
 };

 const deleteToDos = (id) => {
  const newToDos = localStorage.filter((todo) => todo.id !== id);

  setLocalStorage(newToDos);
 };

 const completedHandler = (id) => {
  const newToDos = localStorage.map((todo) =>
   todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo },
  );
  setLocalStorage(newToDos);
 };

 useEffect(() => {
  const timer = setTimeout(() => {
   setError(false);
  }, 5000);

  return () => {
   clearTimeout(timer);
  };
 }, [error]);

 const completedToDosCount = localStorage.filter((todo) => todo.completed).length;

 return (
  <main className="bg-blue-900 h-screen flex flex-col items-center pt-20">
   <h1 className="text-white text-5xl tracking-wider py-6">Todo App</h1>
   <Form addToDos={addToDos} />
   {localStorage.length > 0 ? (
    <TodoActions resetHandler={resetHandler} removeCompleteHandler={removeCompleteHandler} />
   ) : null}
   {error && <p className="text-red-500 pt-4">Add some text...</p>}

   {localStorage <= 0 ? (
    <p className="text-white text-3xl pt-10">Todo list is empty</p>
   ) : (
    <TodoList toDos={localStorage} deleteToDos={deleteToDos} completedHandler={completedHandler} />
   )}
   {completedToDosCount > 0 ? (
    <h2 className="pt-6 text-white">{`You have completed ${completedToDosCount} ${
     completedToDosCount === 1 ? 'ToDo' : 'ToDos'
    }`}</h2>
   ) : null}
  </main>
 );
}

export default App;
