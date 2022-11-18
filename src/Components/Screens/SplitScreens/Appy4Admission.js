import { Button } from '@mui/material'
import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'

function Appy4Admission() {
   const [name, setName] = useState()
   const [contact, setContact] = useState()
   const [mothersName, setMothersName] = useState()
   const [fathersName, setFathersName] = useState()
   const [email, setEmail] = useState()
   const [edu, setEdu] = useState()
   const [gender, setGender] = useState()
   const [dtob, setDtob] = useState()
   const [address, setAddres] = useState()

   const handleSubmit = (e) => {
      e.preventDefault()
      axios.post("http://127.0.0.1:8000/api/-----", { 
         name: name,
         contact: contact,
         email: email,
         mothersName:mothersName,
         fathersName:fathersName,
         dtob:dtob,
         gender:gender,
         edu:edu,
         address:address,

      })
         .then(res => console.log(res))
   }

   return (
      <>
         <Header />
         <div className="flex flex-col" style={{ minHeight: "100vh" }}>
            <div className="dark:text-white bg-dark text-white">
               <form className="border-0 shadow mt-4 px-5" >
                  <div className="h2 text-center p-3"><p className='first-letter:text-orange-400 first-letter:text-5xl relative '>Apply
                     <span className='before:block before:absolute before:-inset-1 before:-skew-y-6 before:-skew-x-12 before:bg-orange-500 relative px-2 py-0 ml-3'>
                        <span className='relative text-white'>for</span>
                     </span> Admission</p></div>
                  <div className="row mb-3">
                     <div className="col-12">
                        <label for="name">Name</label>
                        <input onChange={(e)=>setName(e.target.value)} type="text" id="name" className="w-100 form-control shadow-sm " required />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <div className="col-6">
                        <label for="m_name">Mother's Name</label>
                        <input onChange={(e)=>mothersName(e.target.value)} type="text" id="m_name" className="w-100 form-control shadow-sm  " required />
                     </div>
                     <div className="col-6">
                        <label for="f_name">Father's Name</label>
                        <input onChange={(e)=>fathersName(e.target.value)} type="text" id="f_name" className="w-100 form-control shadow-sm " required />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <div className="col-6">
                        <label for="contact">Contact</label>
                        <input onChange={(e)=>setContact(e.target.value)} type="text" id="m_name" className="w-100 form-control shadow-sm " required />
                     </div>
                     <div className="col-6">
                        <label for="mail">Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" id="f_name" className="w-100 form-control shadow-sm " required />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <div className="col-4">
                        <label for="education">Education</label>
                        <input onChange={(e)=>setEdu(e.target.value)} type="text" id="education" className="w-100 form-control shadow-sm" required />
                     </div>
                     <div className="col-4">
                        <label for="dob">Date Of Birth</label>
                        <input onChange={(e)=>setDtob(e.target.value)} type="date" id="dob" className="w-100 form-control shadow-sm " required />
                     </div>
                     <div className="col-4">
                        <label for="gg">Gender</label>
                        <input onChange={(e)=>setGender(e.target.value)} type="text" id="gg" className="w-100 form-control shadow-sm " required />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <div className="col-12">
                        <label for="add">Address</label>
                        <textarea onChange={(e)=>setAddres(e.target.value)} name="add" id="add" cols="173" rows="6" className="border rounded shadow-sm form-control " required></textarea>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <Button onClick={handleSubmit} color="warning" variant="outlined" type="submit" value="Apply now" className="w-100 py-2 fw-bold text-white shadow-md shadow-black shadow-3xl rounded fs-6">Apply now</Button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
         <Footer />

      </>
   )
}

export default Appy4Admission