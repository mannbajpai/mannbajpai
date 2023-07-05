const Projects = () => {
  return (
    <div className='bg-accent'>
      <h1 className='text-accent-content text-5xl p-4 text-center font-bold'>Projects</h1>
      <div className='grid grid-cols-2 m-0 p-4'>
        <div className="card w-auto bg-base-100 shadow-xl m-1">
          <figure className="px-10 pt-10">
            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Spotify NextJs" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">NextJs Spotify Clone</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Check Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl m-1">
          <figure className="px-10 pt-10">
            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Coin-e-crypto" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Coin-E-Crypto</h2>
            <p>Get all the infomation and live news of your favourite cryptocurrencies at one place</p>
            <div className="card-actions">
              <button className="btn btn-primary">Check Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl m-1">
          <figure className="px-10 pt-10">
            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Check Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl m-1">
          <figure className="px-10 pt-10">
            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Check Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects