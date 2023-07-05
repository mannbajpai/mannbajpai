import contact from "../assets/contact.jpg"
import avatar from "../assets/avatar.jpg"
import { AiOutlineUser } from "react-icons/ai"

const Contact = () => {
  return (
    <div className='bg-accent w-full m-0 h-auto p-5 flex md:justify-between justify-center'>
      <div className='card bg-base-100 shadow-xl md:w-2/5 w-96 items-center text-xl'>
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
          <input type='submit' className='btn bg-primary hover:bg-primary-focus mt-4' />
        </div>
      </div>
      <div className="hidden md:flex w-1/2">
        <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div className="card bg- w-full h-full flex-col">
                <div className="mt-0 px-0">
                  <div className="navbar bg-secondary h-24 rounded justify-center">
                    <a className="text-3xl font-semibold text-base-200 italic">My Portfolio</a>
                  </div>
                </div>
                <div className="my-4 px-2 top-24 relative">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src={avatar} alt="me" />
                      </div>
                    </div>
                    <div className="chat-bubble bg-secondary-focus">Hey!, Nice to connect, by the way are you curious how I made this?!</div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <AiOutlineUser size={40} className="bg-secondary" />
                      </div>
                    </div>
                    <div className="chat-bubble bg-secondary-focus">Not a big deal, but show me.</div>
                  </div>
                  <div className="top-12 relative left-12 right-12">
                    <button className="btn btn-accent btn-lg rounded-full">Check the Code</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact