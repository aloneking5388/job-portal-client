import React from 'react'
import { useForm } from "react-hook-form"

const Postjobs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px4'>
      <div className="bg-[#fafafa] rounded-xl py-10 px-4 lg:px-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row mb-2 items-center justify-center gap-8">
          <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Job Title</label>
            <input type="text" defaultValue={"Web Developer"} 
            {...register("jobTitle")} className='create-job-input'/>
          </div>
          <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Company Name</label>
            <input type="text" placeholder='Ex: Google'
            {...register("companyName")} className='create-job-input'/>
          </div>
        </div>
        <div className="flex flex-col mb-2 lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Minimum Salary</label>
            <input type="text" defaultValue={"Web Developer"} 
            {...register("jobTitle")} className='create-job-input'/>
          </div>
          <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Maximum Salary</label>
            <input type="text" placeholder='Ex: Google'
            {...register("companyName")} className='create-job-input'/>
          </div>
        </div>
      <input type="submit" className='my-5 bg-[#ff3846] py-2 px-4 rounded-lg text-white'/>
    </form>
      </div>
    </div>
  )
}

export default Postjobs