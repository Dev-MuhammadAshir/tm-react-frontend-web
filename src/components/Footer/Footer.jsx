import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tournaments">Tournaments</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/community-rules">Community Rules</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <ul>
              <li>Email: support@example.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Gaming St, eCity</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Follow Us</h4>
            <div className={styles.social}>
              <a href="#" aria-label="Discord">🐦</a>
              <a href="#" aria-label="Twitter">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">🎬</a>
              <a href="#" aria-label="Twitch">📺</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Newsletter</h4>
            <form className={styles.newsletter}>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
            <p className={styles.disclaimer}>We respect your privacy.</p>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2026 GameTourney. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer