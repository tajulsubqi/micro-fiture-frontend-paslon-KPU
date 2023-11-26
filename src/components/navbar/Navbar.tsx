import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserCtx } from '../../libs/MyContext'
import './navbar.css'

const NavbarLog = () => {
  const [state, dispatch] = useContext(UserCtx)
  const { isLogin, user } = state
  const navigate = useNavigate()

  const handleLoginLogout = () => {
    if (isLogin) {
      // Jika sudah login, lakukan aksi logout
      dispatch({ type: 'LOGOUT' })

      //navigasi atau aksi logout
      navigate('/')
    } else {
      // Jika belum login, arahkan ke halaman login
      navigate('/login')
    }
  }

  const handlePartaiClick = () => {
    if (isLogin) {
      navigate('/admin/partai')
    } else {
      navigate('/addpartai')
    }
  }

  const handlePaslonClick = () => {
    if (isLogin) {
      navigate('/admin/paslon')
    } else {
      navigate('/addpaslon')
    }
  }

  const handleVoteClick = () => {
    if (isLogin) {
      navigate('/admin/vote')
    } else {
      navigate('/vote')
    }
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: 'black' }}
      >
        <div className="container">
          <a href="/">
            {' '}
            <img
              src="../public/logo.png"
              alt="logo"
              width="40px"
              className="py-1"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="navbar-link fw-bold ms-2 text-decoration-none"
                  aria-current="page"
                  href="/admin"
                >
                  {isLogin ? 'DASHBOARD PEMILU' : 'PEMILU PRESIDEN DUMBWAYS.ID'}
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row text-white text-center">
            <a
              className="list text-decoration-none p-2"
              onClick={handlePartaiClick}
              style={{ cursor: 'pointer' }}
            >
              Partai
            </a>
            <div className="p-2">|</div>
            <a
              className="list text-decoration-none p-2"
              onClick={handlePaslonClick}
              style={{ cursor: 'pointer' }}
            >
              Paslon
            </a>
            <div className="p-2">|</div>
            <a
              className={`list text-decoration-none p-2 ${
                isLogin ? 'hidden' : ''
              }`}
              onClick={handleVoteClick}
              style={{ cursor: 'pointer' }}
            >
              Voting
            </a>
          </div>
          {isLogin ? (
            <div className="ms-4">
              <button
                className="nav-btn btn-sm fw-bold border rounded text-decoration-none"
                onClick={handleLoginLogout}
              >
                Logout
              </button>
              <span className="text-dark ms-4 btn bg-light fw-bold rounded-circle">
                D{user.name}
              </span>
            </div>
          ) : (
            <a
              href="/login"
              className="nav-btn btn-sm ms-4 fw-bold border rounded text-decoration-none"
              onClick={handleLoginLogout}
            >
              Login
            </a>
          )}
        </div>
      </nav>
    </div>
  )
}

export default NavbarLog
