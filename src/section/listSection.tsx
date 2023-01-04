import React from 'react'
import { movieContent } from '../menuItems/menuItems'
import CardSection from './card'
import { Section } from './section'

const ListSection = () => {
  return (
      <Section>
      {movieContent.map((movie) => (
        <CardSection  movie={movie}/>
        ))}
        </Section>

  )
}

export default ListSection
