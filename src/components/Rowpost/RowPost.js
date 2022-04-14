import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imgUrl} from '../../constants/constants'
import Youtube from "react-youtube"

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [uid, setUid] = useState('')
  useEffect(() => {
    axios.get(props.url).then((Response)=>{
      console.log(Response.data)
      setMovies(Response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
   
    if(id){
      axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((Response)=>{
        console.log(Response.data)
        if(Response.data.results.length!==0){
          setUid(Response.data.results[0])
        }else{
          console.log('error in video')
        }
      
      })
    }
  }

  return (
    <div className='row'>
        <h2 className="title">{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?"smallPoster":"poster"} src={`${imgUrl+obj.backdrop_path}`} alt='not found' />
            )}
        </div>
  { uid &&     <Youtube opts={opts} videoId={uid.key} />  }
    </div>
  )
}

export default RowPost