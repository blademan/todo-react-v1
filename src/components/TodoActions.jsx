import { AiOutlineReload } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';

export default function TodoActions({ resetHandler, removeCompleteHandler }) {
 return (
  <section className=" text-3xl pt-8 flex space-x-4">
   <AiOutlineReload
    onClick={resetHandler}
    className="bg-white rounded-md p-3 w-[54px] h-[54px] text-3xl hover:bg-gray-300 cursor-pointer "
   />
   <MdOutlineDeleteForever
    onClick={removeCompleteHandler}
    className="bg-white rounded-md p-3 w-[54px] h-[54px] text-3xl hover:bg-gray-300 cursor-pointer"
   />
  </section>
 );
}
