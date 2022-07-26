
import React from 'react'
import {useState,useEffect}  from 'react';
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer';



const base_url = 'https://image.tmdb.org/t/p/original'

function Row({title,fetchUrl,isLarge}){

    const [movies, setMovies] = useState([])
    const [trailerUrl,setTrailerurl] = useState('')
    

    useEffect(() => {
        
        // const fech = ()=>{
        //      axios.get(fetchUrl).then((res)=>{
        //         console.log(res)
        //     }).catch((error)=>{
        // console.log(eroor)
        // })  
        // }
        // fech()

        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()

    }, [fetchUrl]);

    // youtube options 
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
             showinfo: 0,
                fs: 0
        }
    }
    // youtube option end here
    // for taking the movie id and settings to the handleTrailerUrl
    function handleClick(movie) {
        if (trailerUrl) {
            setTrailerurl('')
        }
        else {
            // console.log(movie.name)
            // // console.log(movie.name+" "+"trailer"+movie.first_air_date.split("-")[0] )
            // console.log('https://www.themoviedb.org/search?query=The%20Marked%20Heart')
            movieTrailer(null, { tmdbId: movie.id}).then((response) => {
                const value = new URL(response).search
                console.log(value, 'hai halleodkjf   ')
                  // url return cheyyunnath parameters maathramaan
                // urlSearch param return cheyyunath paramsinte dictionari aan 
                // v?= id
                // ee v aan statil set cheyth pass cheyunnath
                const urlParameters = new URLSearchParams(new URL(response).search);
                console.log(typeof(urlParameters))
                
                setTrailerurl(urlParameters.get('v'))
            }).catch(error=>console.log(error))
            
        }
    }
    return (
        <div className='row'>

            {isLarge ? <h2>{title}</h2>:<h4>{title} </h4>}
            
            <div className='row_posters'>
            {/* {
                movies.map(movie=>{
                    
                    return <img src={movie.backdrop_path} alt={movie.name}/>   
                })
            } inganeyum ezhuthaam return value koduth */}

            {
                movies.map(movie=>(
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        // className='row_poster'
                        className = {`row_poster ${isLarge && 'row_large_poster'}`}
                        src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name}>
                        
                    </img>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
            
        </div>
    )
}


export default Row;