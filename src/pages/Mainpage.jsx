import { useState, useEffect } from 'react'
import { fetchPopularMovies, fetchTopRatedMovies, fetchTrendingForDayMovies, fetchUpcomingMovies } from '../services/api';
import Cards from '../components/Cards';
import './mainpage.css'
import SearchBar from '../components/SearchBar';
import { NavLink } from 'react-router-dom';

const Mainpage = () => {

    const [movies, setMovies] = useState([]);
    const [trending, setTrending] = useState([])
    const [Type, setType] = useState('popular')

    useEffect(() => {
        fetchTrendingForDayMovies().then(setTrending)
    }, [])


    useEffect(() => {
        if (Type === 'popular') {
            fetchPopularMovies().then(setMovies);
        } else if (Type === 'top-rated') {
            fetchTopRatedMovies().then(setMovies);
        } else if (Type === 'upcoming') {
            fetchUpcomingMovies().then(setMovies);
        }
    }, [Type]);

    return (
        <div className='main-page'>


            <div className='data'>
                <div className='banner'>
                    <h3>Movie Finder</h3>
                    <SearchBar />
                </div>

                <div className='trendingLabel'>Trending</div>

                <div className='trending'>
                    {trending.map(movie => (
                        <NavLink key={movie.id} to={`movie/${movie.id}`}  >
                            <Cards movie={movie} />
                        </NavLink>
                    ))}
                </div>

                <div className="buttons">
                    <button onClick={() => { setType('popular') }}>Popular</button>
                    <button onClick={() => { setType('top-rated') }}>Top Rated</button>
                    <button onClick={() => { setType('upcoming') }}>Upcoming</button>
                </div>
                <div className="movie-grid">
                    {movies.map(movie => (
                        <NavLink key={movie.id} to={`movie/${movie.id}`} >
                            <Cards movie={movie} />
                        </NavLink>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Mainpage
