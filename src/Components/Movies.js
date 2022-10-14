import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../Components/Movies.css'

const API_KEY = ''

export default function Moviesearch() {
    const [search, setSearch] = useState('')
    const [movie, setMovie] = useState([])
  
    const getMovie = (e) =>{
      e.preventDefault();

      if (search == ''){
        alert('you need to write something')
        return;
        
      } else {
  
      axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      .then((response)=>{
        console.log(response.data)
        console.log(response.status)
        console.log(response.data.Search)
        if (response.data.Search !== undefined) {
        setMovie(response.data.Search)
      } else {
        alert('Movie not found')
        return
      }
      }).catch(error => {
        alert(error);
      })
    }
    }
  

    
  return (
    <>
    <div>
      <form onSubmit={getMovie} style={{textAlign:"center"}}>
      <h3>search movies and series</h3>
      <input type='text' value={search} onChange={e => setSearch(e.target.value)} />
      <button type="submit">search</button>
      </form>
    </div>
    <div className='movie-container'>
      <div className='row'>
          {
            movie.map((value) =>{
              return(
                <div className="movie-col col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <h2>{value.Title} ({value.Year})</h2>
                      <h3>{value.Type}</h3>
                      <h3><a href={`https://www.imdb.com/title/${value.imdbID}`} target="_blank">link to imdb</a></h3>
                    </div>
                    <div className="col-md-6">
                      <img className="movieposter" src={value.Poster}></img>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
