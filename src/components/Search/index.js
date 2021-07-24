import { useDispatch } from 'react-redux'

import './index.scss'

export default function Search () {
  const dispatch = useDispatch()

  const hanldeChange = ({ target: { value } }) => {
    dispatch({
      type: '@search/change_request',
      payload: value
    })
  }

  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input
          onChange={hanldeChange}
          type='text'
          className='input'
          placeholder='Buscar...'
        />
      </section>
    </>
  )
}
