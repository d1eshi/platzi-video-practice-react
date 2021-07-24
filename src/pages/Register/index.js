import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Register ({ history }) {
  const [form, setForm] = useState({ email: '', name: '', password: '' })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending')
    dispatch({ type: '@register/register_request', payload: form })
    history.push('/')
    console.log(form)
  }

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit} className='register__container--form'>
          <input
            name='name'
            className='input'
            onBlur={handleChange}
            type='text'
            placeholder='Nombre'
          />
          <input
            name='email'
            className='input'
            onBlur={handleChange}
            type='text'
            placeholder='Correo'
          />
          <input
            name='password'
            className='input'
            onBlur={handleChange}
            type='password'
            placeholder='Contraseña'
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link to='login'>Iniciar sesión</Link>
      </section>
    </section>
  )
}
