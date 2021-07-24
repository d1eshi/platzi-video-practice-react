import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './index.scss'
import GoogleIcon from 'assets/images/google-icon.png'
import TwitterIcon from 'assets/images/twitter-icon.png'

export default function Login ({ history }) {
  const [form, setForm] = useState({ email: '' })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending')
    dispatch({ type: '@login/login_request', payload: form })
    history.push('/')
  }

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form onSubmit={handleSubmit} className='login__container--form'>
          <input
            onBlur={handleChange}
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
          />
          <input
            onBlur={handleChange}
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
          />
          <button className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' defaultValue='first_checkbox' />Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div><img src={GoogleIcon} /> Inicia sesión con Google</div>
          <div><img src={TwitterIcon} /> Inicia sesión con Twitter</div>
        </section>
        <p className='login__container--register'>No tienes ninguna cuenta <Link to='/register'>Regístrate</Link></p>
      </section>
    </section>

  )
}
