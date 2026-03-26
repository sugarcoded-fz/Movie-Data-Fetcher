import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchMovie } from '../services/api'
import './searchbar.css'

const SearchBar = () => {
  const [query, setquery] = useState("")
  const [results, setresults] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length < 2) {
      setresults([])
      return;
    }
    searchMovie(query).then(setresults).catch(console.error)
  }, [query])

  const handleChange = (id) => {
    navigate(`/movie/${id}`);
    setquery('')
    setresults([])
  };

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder='Search Movie.....'
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />

      {results.length>0 && (
        <div className="search-dropdown">
          {results.slice(0, 5).map((movie)=>(
            <div key={movie.id} className='search-item' onClick={()=>handleChange(movie.id)}>
              {movie.title}
            </div>
          ))}
        </div>
      )}

    </div>

  )
}

export default SearchBar
