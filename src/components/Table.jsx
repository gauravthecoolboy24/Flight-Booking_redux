import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { deleteBooking } from '../redux/actions';

const Table = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const handleDelete = (e) => { 
        const deleteById = parseInt(e.currentTarget.id)
        dispatch(deleteBooking(deleteById))
    }
    console.log(data);

    return (
        <>
            {data.length && (
                <div className=' max-w-6xl mx-auto mt-5 relative bg-gray-200 md:mt-[160]'>
                    <div className="overflow-x-auto">
                        <table className="table">

                            {/* head */}
                            <thead>
                                <tr>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Jounery Date</th>
                                    <th>Guests</th>
                                    <th>Travel Class</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((data, index) => (
                                    <tr key={index}>
                                        <th>{data.from}</th>
                                        <td>{data.to}</td>
                                        <td>{data.date}</td>
                                        <td>{data.guest}</td>
                                        <td>{data.ticketclassname}</td>
                                        <td>
                                            <button id={`${data.id}`} onClick={(e) => handleDelete(e)} className='btn-xs bg-red-500 text-white'> <AiFillDelete className='text-2xl' />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Table
