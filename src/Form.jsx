import React from 'react';

export default function Form() {
 return (
  <section>
   <form className="bg-white rounded-md flex space-x-2 justify-between bg-transparent w-[32rem]">
    <input type="text" className="rounded-md px-4 py-2 w-2/3" />
    <button className="bg-orange-500 hover:bg-orange-800 px-4 py-2 rounded-md w-1/4">Submit</button>
   </form>
  </section>
 );
}
