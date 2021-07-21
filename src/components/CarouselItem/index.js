/* eslint-disable import/no-unresolved */
import propTypes from 'prop-types'

import './index.scss'
import IconPlay from 'assets/images/play-icon.png'
import IconPlus from 'assets/images/plus-icon.png'

export default function CarouselItem({
  cover,
  title,
  year,
  contentRating,
  duration,
}) {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={IconPlay}
            alt='Play Icon'
          />
          <img
            className='carousel-item__details--img'
            src={IconPlus}
            alt='Plus Icon'
          />
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
  duration: propTypes.number,
}
