/* eslint-disable import/no-unresolved */
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.scss'
import IconPlay from 'assets/images/play-icon.png'
import IconPlus from 'assets/images/plus-icon.png'
import removeIcon from 'assets/images/remove-icon.png'

function CarouselItem ({ id, cover, title, year, duration, contentRating, isList }) {
  const dispatch = useDispatch()

  const handleSetFavorite = () => {
    console.log('click')
    dispatch({
      type: '@favorites/add_favorite',
      payload: {
        cover,
        title,
        year,
        contentRating,
        duration,
        id
      }
    })
  }

  const handleRemoveFavorite = itemId => {
    dispatch({
      type: '@favorites/remove_favorite',
      payload: itemId
    })
  }

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={IconPlay}
              alt='Play Icon'
            />
          </Link>
          {
            isList
              ? <img
                  className='carousel-item__details--img'
                  src={removeIcon}
                  alt='Remove Icon'
                  onClick={() => handleRemoveFavorite(id)}
                />
              : <img
                  className='carousel-item__details--img'
                  src={IconPlus}
                  alt='Add Icon'
                  onClick={handleSetFavorite}
                />
          }
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  )
}

// create propTypes for CarouselItem
CarouselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number
}

export default React.memo(CarouselItem)
