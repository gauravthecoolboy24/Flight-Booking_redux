/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../redux/actions";


const Booking = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const size = data.length;


    const [bookingData, setBookingData] = useState({})

    const handleChange = (e) => {
        const newBookingData = { ...bookingData }
        newBookingData[e.target.name] = e.target.value;
        setBookingData(newBookingData);
    }


    const handleBook = (e) => {
        e.preventDefault();
        if(Object.keys(bookingData).length === 5){
            dispatch(makeBooking({...bookingData, id: size+1}))
        } else {
            alert('Please select data properly')
        }
    }

    console.log(bookingData);
 

    return (
        <div>
            <div className="md:mt-[160px] mt-[100px] mx-4 relative">
                <div className="bg-white rounded-md max-w-6xl w-full mx-auto" >
                    <form className="flex flex-col md:flex-row">

                        {/* From */}
                        <div className="px-2.5 py-1.5 flex-1 border-r-2 border-l-2">
                            <p>From</p>
                            <div className="flex flex-row ">
                                <select required onChange={(e) => handleChange(e)} name="from" id="from" className="outline-none p-2 w-full">
                                    <option value="">Please Select</option>
                                    <option>New York</option>
                                    <option>London</option>
                                    <option>Paris</option>
                                    <option>Rome</option>
                                </select>
                            </div>
                        </div>

                        {/* To */}
                        <div className="px-2.5 py-1.5 flex-1 border-r-2 border-l-2">
                            <p>To</p>
                            <div className="flex flex-row ">
                                <select required onChange={(e) => handleChange(e)} name="to" id="to" className="outline-none p-2 w-full">
                                    <option>Please Select</option>
                                    <option>New York</option>
                                    <option>London</option>
                                    <option>Paris</option>
                                    <option>Rome</option>
                                </select>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="px-2.5 py-1.5 flex-1 border-r-2 border-l-2">
                            <p>Journey Date</p>
                            <input type="date" onChange={(e) => handleChange(e)} name="date" required className="outline-none p-2 w-full" />
                        </div>

                        {/* Guest option */}
                        <div className="px-2.5 py-1.5 flex-1 border-r-2 border-l-2">
                            <p>Guest Option</p>
                            <div className="flex flex-row ">
                                <select required name="guest" id="guest" onChange={(e) => handleChange(e)} className="outline-none p-2 w-full">
                                    <option>Please Select</option>
                                    <option>1 Person</option>
                                    <option>2 Person</option>
                                    <option>3 Person</option>
                                    <option>4 Person</option>
                                </select>
                            </div>
                        </div>

                        {/* Travel Class */}
                        <div className="px-2.5 py-1.5 flex-1 border-r-2 border-l-2">
                            <p>Travel Class</p>
                            <div className="flex flex-row ">
                                <select required name="ticketclassname" id="ticketclassname"  onChange={(e) => handleChange(e)} className="outline-none p-2 w-full">
                                    <option>Please Select</option>
                                    <option>Economy</option>
                                    <option>Business</option>
                                </select>
                            </div>
                        </div>


                        {/* Button */}
                        <button onClick={(e) => handleBook(e)} type="submit" className="bg-indigo-500 flex items-center justify-center text-white px-8 py-1 space-x-2">Book Now  <PiAirplaneTakeoffLight className="text-3xl text-black ml-2"/></button>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booking
