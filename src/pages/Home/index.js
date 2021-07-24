import Search from 'components/Search'
import Carousel from 'components/Carousel'
import CarouselItem from 'components/CarouselItem'
import { useSelector } from 'react-redux'
// import { connect } from 'react-redux'

export default function HomePage () {
  // to get the data from redux state
  const movies = useSelector(state => state)
  return (
    <>
      <Search />
      {
        movies.searchResult.length > 0 &&
          <Carousel title='Resultados de búsqueda'>
            {
              movies.searchResult?.map((movie) => (
                <CarouselItem key={movie.id} {...movie} isList />
              ))
            }
          </Carousel>
      }

      {movies.mylist.length > 0 &&
        <Carousel title='Mi Lista'>
          {
            movies.mylist?.map((movie) => (
              <CarouselItem key={movie.id} {...movie} isList />
            ))
          }
        </Carousel>}

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
    </>
  )
}
