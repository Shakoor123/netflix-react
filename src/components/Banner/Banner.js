
import React,{ useEffect } from 'react'
import { API_KEY , imgUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
import { useState } from 'react'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`trending/all/day?api_key=${API_KEY}`).then((Response)=>{
          console.log(Response.data.results[0])
          setMovie(Response.data.results[13])
      })
    }, []);
    
    return (
        <div
        style={{backgroundImage:`URL(${movie?imgUrl+movie.backdrop_path :""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='titlel'>{movie ? movie.title : "Moon Night"}</h1>
                <div className='banner_buttons'>
                    <button className='button'>play</button>
                </div>
                <h1 className='discription'>{movie? movie.overview :""}</h1>
            </div>
            <div className="fade_bottom">
                
            </div>
        </div>
    )
}

export default Banner