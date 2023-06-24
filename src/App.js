import React, {useEffect, useState} from 'react'
import './App.css'
import myList from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'


const App = () => {
  const [movieList, setMovieList] = useState([])
  const [featureData, setFeaturedData] = useState(null)
  const [blackHeader, setHeaderBlack] = useState(false)

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


  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10)
        setHeaderBlack(true)
      else
        setHeaderBlack(false)
      }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className='page'>
      <Header black={blackHeader}/>

      { featureData && <FeaturedMovie item={featureData}/> }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens}/>
        ))}
      </section>
    </div>
  )
}



export default App