import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import NotFound from 'pages/NotFound'

import './index.scss'

export default function Player ({ history }) {
  const playing = useSelector(state => state.playing)
  const dispatch = useDispatch()

  const { id } = useParams()

  const hasPlaying = Object.keys(playing).length > 0

  useLayoutEffect(() => {
    dispatch({
      type: '@player/get_video_source',
      payload: id
    })
  }, [id])

  return hasPlaying
    ? (
      <div className='Player'>
        <video controls autoPlay>
          <source src={playing.source} type='video/mp4' />
        </video>
        <div className='Player-back'>
          <button type='button' onClick={() => history.goBack()}>Regresar</button>
        </div>
      </div>
      )
    : <NotFound />
}
