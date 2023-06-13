import React from 'react'

const Contact = () => {
  return (
    <div className='bg-accent w-full h-auto p-5'>
      <div className='card bg-base-100 shadow-xl w-96 mx-20'>
        <div className='pt-10 px-10'>
          <h1 className='text-neutral-content text-3xl text-center'>Connect</h1>
        </div>
        <div className="form-control w-full max-w-xs ml-4 py-4">
          <label className="label my-4">
            <span className="label-text">What is your name?</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <label className="label my-4">
            <span className="label-text">What is your email?</span>
          </label>
          <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <label className="label my-4">
            <span className="label-text">Your Message</span>
          </label>
          <textarea className="textarea textarea-bordered h-24" placeholder="Type Here"></textarea>
          <input type='submit' className='btn bg-primary hover:bg-primary-focus mt-4'/>
        </div>
      </div>

    </div>
  )
}

export default Contact