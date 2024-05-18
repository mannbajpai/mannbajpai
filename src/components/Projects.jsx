const Projects = () => {
  return (
    <div id="projects" className='bg-accent'>
      <h1 className='text-accent-content text-5xl p-4 text-center font-bold'>Projects</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 m-0 p-4'>
        <div className="card w-auto bg-base-100 shadow-xl m-1">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Spotify Clone</h2>
            <p>A Full Stack Spotify website clone with features like user authentication, music addition and playback, filter
              search, server side rendering and etc</p>
            <div className="card-actions">
              <a href="https://spotify-clone-mannbajpai.vercel.app" target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Check Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl m-1">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Coin-E-Crypto</h2>
            <p>Get all the infomation and live news of your favourite cryptocurrencies at one place</p>
            <div className="card-actions">
              <a href="https://coin-e-crypto.netlify.app" target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Check Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl m-1">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Retrieval Augmented Generation App</h2>
            <p>RAG App designed on Meta&apos;s Llama2 to answer queries about data from PDFs</p>
            <div className="card-actions">
              <a href="https://github.com/mannbajpai/Llama_Index_RAG_Llama2" target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Check Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl m-1">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Task Manager Backend API</h2>
            <p>A simple CRUD REST API for managing tasks for users with features like specific endpoints for user login/signup, tasks CRUD operations</p>
            <div className="card-actions">
              <a href="https://github.com/mannbajpai/task-manager-api" target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Check Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects