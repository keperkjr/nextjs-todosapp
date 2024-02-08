import React from 'react'

async function TodosPage() {
    const response = await fetch("http://localhost:3000/api/todos", {
        cache: "no-store", // dont cache the result
        //next: { revalidate: 15 } // refresh cache period (seconds)
    });
    const data = await response.json();

    console.log(data);

    return (
        <section className='mt-24 w-full h-full flex justify-center'>
            <table className='min-w-max bg-white border border-gray-200 rounded-lg overflow-hidden'>
                <thead className='bg-gray-100 text-gray-600 uppercase text-sm leading-normal'>
                    <tr className='bg-gray-100 text-gray-600 uppercase text-sm leading-normal'>
                        <th className='py-3 px-5 text-left'>
                            Id
                        </th>
                        <th className='py-3 px-5 text-left'>
                            Name
                        </th>
                        <th className='py-3 px-5 text-left'>
                            Actions
                        </th>                                                
                    </tr>
                </thead>
                <tbody className='text-gray-600 text-sm font-light'>
                    {data.todos.map(todo => (
                        <tr key={todo.id} className='border-b border-gray-200 hover:bg-gray-100'>
                            <td className='py-3 px-6'>
                                {todo.id}
                            </td>
                            <td className='py-3 px-6'>
                                {todo.name}
                            </td>
                            <td className='py-3 px-6'>
                                <button>Delete</button>
                            </td>                                                        
                        </tr>    
                    ))} 
                </tbody>
            </table>
        </section>
    )
}

export default TodosPage