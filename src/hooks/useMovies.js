import { useEffect, useState } from 'react'

export default function useMovies () {
  const [movies, setMovies] = useState([])

  const API = 'https://mighty-reef-40013.herokuapp.com/api/movies'

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setMovies(data))
  }, [])

  return movies
}
