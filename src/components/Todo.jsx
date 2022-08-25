import { FcTodoList } from 'react-icons/fc';
import { MdOutlineDone, MdOutlineDeleteForever } from 'react-icons/md';

export default function Todo({ text, deleteToDos, id, completedHandler, completed }) {
 return (
  <li
   className={`${
    completed ? 'bg-gray-300' : 'bg-white'
   } flex space-x-4 justify-between items-center  w-full p-4 rounded-md`}>
   <div className="flex space-x-4 items-center">
    <FcTodoList className="text-3xl" />
    <p
     className={`${
      completed ? 'line-through' : null
     } text-gray-700 text-lg font-bold decoration-pink-500 decoration-4`}>
     {text}
    </p>
   </div>
   <div className=" flex space-x-2 text-gray-400  cursor-pointer font-bold ">
    <MdOutlineDeleteForever
     onClick={() => deleteToDos(id)}
     className="hover:text-red-500 text-2xl hover:scale-110 duration-300"
    />
    <MdOutlineDone
     className={`${
      completed ? 'text-green-500' : null
     }  hover:text-green-500 text-2xl hover:scale-110 duration-300"`}
     onClick={() => completedHandler(id)}
    />
   </div>
  </li>
 );
}
