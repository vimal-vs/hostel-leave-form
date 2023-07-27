import React from 'react'

export default function Form() {

    const inputStyle = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    
    const labelStyle = "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
    
  return (
    <>
    <form>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="student_name" id="student_name" className={inputStyle} placeholder=" " required />
        <label htmlFor="student_name" className={labelStyle}>Student Name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="register_no" id="register_no" className={inputStyle} placeholder=" " required />
        <label htmlFor="register_no" className={labelStyle}>Register No.</label>
    </div>
    <div className='flex gap-8 mb-6'>
        <label htmlFor="faculty">Faculty :</label>
        <div className='flex gap-4'>
            <div className='flex gap-1'>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">FET</label>
            </div>
            <div className='flex gap-1'>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">FSH</label>
            </div>
            <div className='flex gap-1'>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">FMHS</label>
            </div>
        </div>
    </div>
    <div className='grid md:grid-cols-2 md:gap-6 mb-6'>
        <select id="department" className='border-2 border-gray-600 text-sm rounded-sm' defaultValue='default'>
            <option value="default" disabled>Department</option>      
            <option value="cse">CSE</option>
            <option value="cse-aiml">CSE-AIML</option>
            <option value="ece">ECE</option>
        </select>
        <select id="class" className='border-2 border-gray-600 text-sm rounded-sm' defaultValue='default'>
            <option value="default" disabled>Class</option>      
            <option value="cse-a">CSE A</option>
            <option value="cse-aiml-a">CSE-AIML A</option>
            <option value="ece-a">ECE A</option>
        </select>
    </div>
    <div className='grid md:grid-cols-2 md:gap-6 mb-6'>
        <div className="relative z-0 w-full group">
            <input type="number" name="hostel_room_no" id="hostel_room_no" className={inputStyle} placeholder=" " required />
            <label htmlFor="hostel_room_no" className={labelStyle}>Hostel Room No.</label>
        </div>
        <div className="relative z-0 w-full group">
            <input type="text" name="hostel_name" id="hostel_name" className={inputStyle} placeholder=" " required />
            <label htmlFor="hostel_name" className={labelStyle}>Hostel Name</label>
        </div>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="reason" id="reason" className={inputStyle} placeholder=" " required />
        <label htmlFor="reason" className={labelStyle}>Reason for leave</label>
    </div>
    <div className='grid md:grid-cols-2 md:gap-6 mb-6'>
        <div className="relative z-0 w-full group">
            <input type="date" name="from_date" id="from_date" className={inputStyle} placeholder=" " required />
            <label htmlFor="from_date" className={labelStyle}>From</label>
        </div>
        <div className="relative z-0 w-full group">
            <input type="date" name="to_date" id="to_date" className={inputStyle} placeholder=" " required />
            <label htmlFor="to_date" className={labelStyle}>To</label>
        </div>
    </div>
    <div className='grid md:grid-cols-2 md:gap-6 mb-6'>
        <div className="relative z-0 w-full group">
            <input type="time" name="out_time" id="out_time" className={inputStyle} placeholder=" " required />
            <label htmlFor="out_time" className={labelStyle}>Hostel Out Time</label>
        </div>
        <div className="relative z-0 w-full group">
            <input type="time" name="in_time" id="in_time" className={inputStyle} placeholder=" " required />
            <label htmlFor="in_time" className={labelStyle}>Hostel In Time</label>
        </div>
    </div>
    <div className="relative z-0 w-full group mb-6">
        <input type="text" name="place_visit" id="place_visit" className={inputStyle} placeholder=" " required />
        <label htmlFor="place_visit" className={labelStyle}>Place to Visit</label>
    </div>
    <div className="relative z-0 w-full group mb-6">
        <input type="address" name="address" id="address" className={inputStyle} placeholder=" " required />
        <label htmlFor="address" className={labelStyle}>Address for Communication</label>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="parent_phone" id="parent_phone" className={inputStyle} placeholder=" " required />
            <label htmlFor="parent_phone" className={labelStyle}>Parent/Guardian's Mobile No.</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="student_phone" id="student_phone" className={inputStyle} placeholder=" " required />
            <label htmlFor="student_phone" className={labelStyle}>Student's Mobile No.</label>
        </div>
    </div>
    <div className='flex gap-4 mb-4'>
        <input type="checkbox" name="confirmation" id="confirmation" />
        <label htmlFor="confirmation">I confirm that the given details are correct and are filled by myself.</label>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
    </>
  )
}
