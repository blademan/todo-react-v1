import { useState } from 'react';

export default function Form({ addToDos }) {
 const [text, setText] = useState('');

 const submitHandler = (e) => {
  e.preventDefault();
  addToDos(text);
  setText('');
 };
 return (
  <section>
   <form
    onSubmit={submitHandler}
    className="bg-white rounded-md flex space-x-2 justify-between bg-transparent w-[32rem]">
    <input
     value={text}
     onChange={(e) => setText(e.target.value)}
     type="text"
     className="rounded-md px-4 py-2 w-2/3"
    />
    <button type="submit" className="bg-orange-500 hover:bg-orange-800 px-4 py-2 rounded-md w-1/4">
     Submit
    </button>
   </form>
  </section>
 );
}
