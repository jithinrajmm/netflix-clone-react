import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'
const base_url = 'https://image.tmdb.org/t/p/original/'


function Banner() {

    const [movie, setMovies] = useState([])

    useEffect(() => {
        async function getData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies(
                request.data.results[Math.floor(Math.random()* request.data.results.length - 1)]
            )
   
            return request
        }
        getData();

        
    }, [])

    function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + '...': str;
}
    
    console.log(movie)
    return (
        
        <header className='banner'
            style={{
                backgroundImage: `url("${base_url}${movie.backdrop_path}")`,
              
            }}
        >  {/* image background */}
          
            <div className='banner_contents'>
                    {/* title */}
                
                    <h1 className='banner_title'>{ movie?.name || movie?.title || movie?.original_name}</h1>
                    {/* div for two buttons */}
                    <div className='banner_buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                    </div>
                    {/* description */}
                    
                <h1 className='banner_description' >{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className='banner_fade_bottom'></div>
        </header>
        
    )
}

export default Banner;