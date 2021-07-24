import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import useGravatar from 'services/useGravatar'

import './index.scss'

import LogoPlatzi from 'assets/images/logo-platzi-video-BW2.png'
import UserIcon from 'assets/images/user-icon.png'

export default function Header () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const hasUser = Object.keys(user).length > 0

  const handleLogout = () => {
    dispatch({
      type: '@login/logout_request',
      payload: {}
    })
  }

  const headerClass = useLocation().pathname === ('/register') || useLocation().pathname === ('/login') ? 'greenHeader' : null

  return (
    <>
      <header className={`header ${headerClass}`}>
        <Link to='/' rel='canonical'>
          <img className='header__img' src={LogoPlatzi} alt='Platzi Video' />
        </Link>

        <div className='header__menu'>
          <div className='header__menu--profile'>
            {hasUser
              ? <img src={useGravatar(user.email)} alt={user.email} />
              : <img src={UserIcon} alt='' />}
            <p>Perfil</p>
          </div>
          <ul>
            {hasUser
              ? <>
                <li>
                  <a href='/'>{user.name}</a>
                </li>
                <li>
                  <a href='#logout' onClick={handleLogout}>Cerrar Sesión</a>
                </li>
              </>

              : <li>
                <Link to='/login'>Iniciar Sesión</Link>
                </li>}
          </ul>
        </div>
      </header>
    </>
  )
}
