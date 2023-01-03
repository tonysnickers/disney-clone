import React from 'react'
import { searchMovie } from '../api'
import Header from '../components/header'
import SectionMovies from '../components/sectionMovies'
import SectionParc from '../components/SectionParc'
import ListSection from '../section/listSection'

const Home = () => {
  const {data, loading, error} = searchMovie()
  console.log(data)
  return (
    <>
      <Header/>
      <ListSection/>
      <SectionParc/>
      <SectionMovies movies={data}/>
    </>
  )
}

export default Home
