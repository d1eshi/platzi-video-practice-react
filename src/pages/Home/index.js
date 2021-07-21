/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import useMovies from 'hooks/useMovies.js'

import Header from 'components/Header'
import Search from 'components/Search'
import Carousel from 'components/Carousel'
import CarouselItem from 'components/CarouselItem'
import Footer from 'components/Footer'

export default function HomePage() {
  const movies = useMovies()

  return (
    <>
      <Header />
      <Search />
      <Carousel title='Tendencias'>
        {movies.trends?.map((movie) => (
          <CarouselItem key={movie.id} {...movie} />
        ))}
      </Carousel>

      <Carousel title='Originales'>
        {movies.originals?.map((movie) => (
          <CarouselItem key={movie.id} {...movie} />
        ))}
      </Carousel>
      <Footer />
    </>
  )
}
