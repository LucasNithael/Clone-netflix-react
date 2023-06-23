import React, {useEffect, useState} from 'react'
import './App.css'
import myList from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([])
  const [featureData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      // lista total de filmes
      let list = await myList.getHomeList()
      setMovieList(list)

      // filme em destaque
      let orininals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (orininals[0].itens.results.length - 1))
      let chosen = orininals[0].itens.results[randomChosen]
      let chosenInfo = await myList.getMovieInfo(chosen.id, 'tv')
     setFeaturedData(chosenInfo)
      
    }

    loadAll()
  }, [])

  return (
    <div className='page'>

      <FeaturedMovie item={featureData}/>

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens}/>
        ))}
      </section>
    </div>
  )
}



//https://api.themoviedb.org/3/movie/550?api_key=38c007f28d5b66f36b9c3cf8d8452a4b&language=pt-BR