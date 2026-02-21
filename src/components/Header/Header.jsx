import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import NavMenu from './NavMenu'
import styles from './Header.module.css'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            GameTourney
          </Link>

          <NavMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

          <div className={styles.actions}>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            {user ? (
              <div className={styles.userMenu}>
                <button onClick={logout} className={styles.logoutButton}>Sign out</button>
              </div>
            ) : (
              <div className={styles.authLinks}>
                <Link to="/login" className={styles.login}>Login</Link>
                <Link to="/register" className={styles.register}>Sign Up</Link>
              </div>
            )}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XMarkIcon width={24} /> : <Bars3Icon width={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header