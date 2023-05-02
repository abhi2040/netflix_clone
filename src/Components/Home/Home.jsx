import React, {useEffect, useState} from 'react'
import "./Home.scss";
import axios from 'axios';
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
const apiKey = "0ad3b47d5472358acded9a8534334352";
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const topRated = "top_rated";
const popular = "popular";
const latest = "latest";  


const Card = ({ img }) => <img className='card' src={img} alt="cover_img" />

const Row = ({title,arr=[] }) => {
  return (
    <div className='row'>
    <h2>{title}</h2>
    <div>
       {
        arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
         
        ))
       }
    </div>
    </div>
  )
}


const Home = () => {

  const[upcomingMovies, setUpcomingMovies] = useState([]);
  const[nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const[topRatedMovies, setTopRatedMovies] = useState([]);
  const[popularMovies, setPopularMovies] = useState([]);
  const[latestMovies, setlatestMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async() => {
      const {
        data: { results },
       } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&page=5`)
      setUpcomingMovies(results)
    };
    const fetchNowPlaying = async() => {
      const {
        data: { results },
       } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setnowPlayingMovies(results)
    };
    const fetchTopRated = async() => {
      const {
        data: { results },
       } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
       setTopRatedMovies(results)
    };
    const fetchPopular = async() => {
      const {
        data: { results },
       } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
       setPopularMovies(results)
    };
    const fetchLatest = async() => {
      const {
        data: { results },
       } = await axios.get(`${url}/movie/${latest}?api_key=${apiKey}`)
       setlatestMovies(results)
    };
    fetchUpcoming();
    fetchLatest();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();

  },[]);

  return (
    <section className="home">
      <div className="banner" style={{
        backgroundImage: popularMovies[0]? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`: "rgb(16,16,16)"
      }}>
        {
          popularMovies[0] &&
          (
            <h1>{popularMovies[0].original_title}</h1>
          )
        }
        {
          popularMovies[0] && (
             <p>{popularMovies[0].overview}</p>
          )
        }
        <div>
          <button><BsFillPlayFill className='btn'/> Play</button>
          <button><AiOutlineInfoCircle className='btn-info'/> More Info </button>

        </div>

      </div>
      <Row title={"Trending Now"} arr= {upcomingMovies}/>
      <Row title={"Continue Watching"} arr= {nowPlayingMovies}/>
      <Row title={"New Releases"} arr= {topRatedMovies}/>
      <Row title={"Kids' TV"} arr= {popularMovies}/>
      <Row title={"My List"} arr= {latestMovies}/>  
    </section>
  )
}

export default Home