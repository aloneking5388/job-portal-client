import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div>
        <div className="mb-10">
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText />
                Email me for Jobs
            </h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio inventore nihil omnis.</p>
            <div className="w-full space-y-4">
                <input type="email" id='email' placeholder='Your@email.com' className='w-full rounded-md block py-2 pl-3 border focus:outline-none'/>
                <input type="submit"  value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-md text-white cursor-pointer font-semibold' />
            </div>
        </div>
        <div className="mt-20">
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket />
                Get noticed faster
            </h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio inventore nihil omnis.</p>
            <div className="w-full space-y-4">
                <input type="submit"  value={"Upload your Resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-md text-white cursor-pointer font-semibold' />
            </div>
        </div>
    </div>
  )
}

export default Newsletter