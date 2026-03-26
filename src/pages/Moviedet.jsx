import { useState, useEffect } from 'react'
import './movieDet.css'
import { useParams } from 'react-router-dom'
import { fetchMovieDetail } from '../services/api'

const Moviedet = () => {
  const { id } = useParams()
  const [movie, setmovie] = useState(null)

  useEffect(() => {
    fetchMovieDetail(id).then(setmovie).catch(console.error)
  }, [id])

  

  return (
    (!movie)? <p className='loader'>Loading..</p> :

    <div>

      <div className='banner'>
        <h3>Details</h3>
      </div>


      <div className="content-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title} />

        <div className='det-boxes'>
          <div className="det-box">
            <div className='det-xx'>
              <div>
                <span>Title:</span>
                <div>{movie.title}</div>
              </div>
              <div>
                <span>Release Date:</span>
                <div>{movie.release_date}</div>
              </div>
              <div>
              <span>Language:</span>
              <div>{movie.original_language}</div>
            </div>
            </div>
            
          </div>
          <div className='det-box'>
            <span>Overview:</span>
            <div>{movie.overview}</div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Moviedet

