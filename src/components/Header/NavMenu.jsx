import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/tournaments', label: 'Tournaments' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/resources', label: 'Resources' },
  { path: '/faq', label: 'FAQ' },
  { path: '/how-it-works', label: 'How It Works' },
]

const NavMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? styles.active : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu