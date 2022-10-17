import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import client from "../../api/baseApi";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const { id } = useParams();
  console.log("TEST ==>", id);

  const fetchData = async () => {
    try {
    const data = await client.get(`/todos?userId=${id}`);
      setTodos(data.data);
      console.log("data ==>", data);
    } catch (err) {
      console.log("error ===> ", err);
    }
  };

  console.log(todos);

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <section>
    <h1 className="flex justify-center text-2xl py-7 mt-5 font-semibold text-blue-800">
        Todo List
      </h1>
    <div className="flex px-10 mb-12">
        <table className=" w-full md:mx-10 mx-7 mb-10">
            <thead className=" w-full">
              <tr className="bg-slate-800 text-white">
              <th className="p-2">ID</th>
                <th className="p-2">Todo</th>
                <th className="p-2 px-5 text-center">Completed</th>
              </tr>
            </thead>
            <tbody className="w-full bg-gray-100 text-black">
              {todos.map((todo => (
                <tr key={todo.id} className="px-2 py-3 even:bg-gray-200">
                  <td className="p-3">{todo.userId}-{todo.id}</td>
                  <td className="px-5 py-5">{todo.title}</td>
                  <td className="flex justify-end mr-1 items-center p-2">
                    <p className={`text-white rounded-md py-1 w-24 md:scale-100 scale-95 ${todo.completed === true ? 'bg-green-800' : 'bg-red-700'}`}>
                      {`${todo.completed}`}
                    </p>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
    </div>
    </section>
  );
};

export default TodosPage;

// import React from "react";

// const TodosTable = ({ title, completed, todos }) => {
//   return (
//     <div className="w-full mt-5">
//       <section className="flex justify-center mx-auto">
//           <table className="max-w-fit md:mx-10 mx-7 mb-10">
//             <thead className="max-w-fit">
//               <tr className="bg-slate-900 text-white">
//                 <th className="p-2">Todo</th>
//                 <th className="p-2 px-5 text-center">Status</th>
//               </tr>
//             </thead>
//             <tbody className="bg-gray-100">
//               {todos.map((todo => (
//                 <tr key={todo.id} className="px-2 py-3 even:bg-gray-200">
//                   <td className="p-2">{todo.id}</td>
//                   <td className="px-5 py-3">{todo.title}</td>
//                   <td className="flex justify-end mr-1 items-center p-2">
//                     <p className={`text-white rounded-md py-1 w-24 md:scale-100 scale-95 ${todo.completed === true ? 'bg-green-800' : 'bg-red-700'}`}>
//                       {`${todo.completed}`}
//                     </p>
//                   </td>
//                 </tr>
//               )))}
//             </tbody>
//           </table>
//         </section>
//     </div>
//   );
// };

// export default TodosTable;
