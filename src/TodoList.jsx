import { FcTodoList } from 'react-icons/fc';
export default function TodoList() {
 return (
  <section className="pt-10 ">
   <ul className="w-[32rem] space-y-4">
    <li className="flex space-x-4 items-center bg-white w-full p-4 rounded-md">
     <FcTodoList className="text-3xl" />
     <p className="text-gray-700 text-lg font-bold">Macbook</p>
    </li>
    <li className="flex space-x-4 items-center bg-white w-full p-4 rounded-md">
     <FcTodoList className="text-3xl" />
     <p className="text-gray-700 text-lg font-bold">Macbook</p>
    </li>
   </ul>
  </section>
 );
}
