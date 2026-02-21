import { Link } from 'react-router-dom'
import Button from '../../ui/button/Button'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>Compete. Win. <span className={styles.highlight}>Glory.</span></h1>
          <p>Join the ultimate gaming tournaments and prove your skills. Cash prizes, leaderboards, and a vibrant community await.</p>
          <div className={styles.buttons}>
            <Button as={Link} to="/tournaments" size="lg">Browse Tournaments</Button>
            <Button as={Link} to="/how-it-works" variant="outline" size="lg">How It Works</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero