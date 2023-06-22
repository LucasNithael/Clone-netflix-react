import React, {useEffect, useState} from 'react'
import './App.css'
import myList from './Tmdb'
import MovieRow from './components/MovieRow'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await myList.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className='page'>
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens}/>
        ))}
      </section>
    </div>
  )
}



//https://api.themoviedb.org/3/movie/550?api_key=38c007f28d5b66f36b9c3cf8d8452a4b&language=pt-BR