import { Button } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Appy4Admission() {
  return (
    <>
    <Header/>
    <div className="flex flex-col" style={{minHeight:"100vh"}}>
        <div className="dark:text-white bg-dark text-white">
          <form  className="border-0 shadow mt-4 px-5" >
                <div className="h2 text-center p-3"><p className='first-letter:text-orange-400 first-letter:text-5xl relative '>Apply 
                      <span className='before:block before:absolute before:-inset-1 before:-skew-y-6 before:-skew-x-12 before:bg-orange-500 relative px-2 py-0 ml-3'>
                        <span className='relative text-white'>for</span>
                      </span> Admission</p></div>
              <div className="row mb-3">
                <div className="col-12">
                    <label for="name">Name</label>
                    <input type="text" id="name" className="w-100 form-control shadow-sm " required />
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                    <label for="m_name">Mother's Name</label>
                    <input type="text" id="m_name" className="w-100 form-control shadow-sm  " required />
                 </div>
                 <div className="col-6">
                    <label for="f_name">Father's Name</label>
                    <input type="text" id="f_name" className="w-100 form-control shadow-sm " required />
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                    <label for="contact">Contact</label>
                    <input type="text" id="m_name" className="w-100 form-control shadow-sm " required />
                 </div>
                 <div className="col-6">
                    <label for="mail">Email</label>
                    <input type="text" id="f_name" className="w-100 form-control shadow-sm " required />
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                    <label for="education">Education</label>
                    <input type="text" id="education" className="w-100 form-control shadow-sm" required />
                 </div>
                 <div className="col-4">
                    <label for="dob">Date Of Birth</label>
                    <input type="date" id="dob" className="w-100 form-control shadow-sm " required />
                 </div>
                 <div className="col-4">
                    <label for="gg">Gender</label>
                    <input type="text" id="gg" className="w-100 form-control shadow-sm " required />
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                    <label for="add">Address</label>
                    <textarea name="add" id="add" cols="173" rows="6" className="border rounded shadow-sm form-control " required></textarea>
                 </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <Button color="warning" variant="outlined" type="submit" value="Apply now" className="w-100 py-2 fw-bold text-white shadow-md shadow-black shadow-3xl rounded fs-6">Apply now</Button>
                  </div>
              </div>
            </form>
        </div>
    </div>
          <Footer/>

    </>
  )
}

export default Appy4Admission