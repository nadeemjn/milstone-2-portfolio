import React from "react";
import { GrMailOption } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




 const Contact = () => {
    return (
        <div id="contact" className="pt-32 container">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
                <h2 className="text-5xl">Get touch</h2>
                <p className="text-gray-600 text-[18px] pt-2">
                    Drop me a line, give me a call, or send me a message by submitting the form
                </p>
                <div className='flex gap-3 items-center'>
                <GrMailOption size={40}/>nadeem21@gmail.com

               </div>
               <div className='flex gap-3 items-center'>
                <FaPhoneAlt size={40}/>0300-3400880

               </div>
               <div className='flex gap-3 items-center'>
                <FaFacebook  size={40}/>Nadeem ali

               </div>
            </div>
            <div className="space-y-8">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className="h-[40px] bg-slate-600"
                    id="name"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="phone">Email</label>
                    <input type="text"
                    className="h-[40px] bg-slate-600"
                    id="email"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className=" bg-slate-600"
                    id="msg" rows={8}/>
                </div>
                <button className="bg-slate-600 p-2 px-6">Submit</button>
            </div>
          </div>
        </div>
    )
 }

 export default Contact;