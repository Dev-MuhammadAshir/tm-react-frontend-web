import { Link } from 'react-router-dom'
import { ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import styles from './Tournaments.module.css'

const TournamentCard = ({ tournament }) => {
  const getStatusBadge = () => {
    switch (tournament.status) {
      case 'open': return <span className={`${styles.badge} ${styles.open}`}>Registration Open</span>
      case 'starting-soon': return <span className={`${styles.badge} ${styles.starting}`}>Starting Soon</span>
      case 'closed': return <span className={`${styles.badge} ${styles.closed}`}>Closed</span>
      default: return null
    }
  }

  return (
    <Card className={styles.tournamentCard}>
      <img src={tournament.image} alt={tournament.name} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{tournament.name}</h3>
          {getStatusBadge()}
        </div>
        <p className={styles.description}>{tournament.description}</p>
        <div className={styles.meta}>
          <span><UserGroupIcon width={18} /> {tournament.totalJoined} Players</span>
          <span><ClockIcon width={18} /> Starts {new Date(tournament.startDate).toLocaleDateString()}</span>
        </div>
        <div className={styles.prizeEntry}>
          <span className={styles.prize}>💰 {tournament.prizePool}</span>
          <span className={styles.entry}>Entry: {tournament.entryFee}</span>
        </div>
        <div className={styles.actions}>
          <Button as={Link} to={`/tournaments/${tournament.id}`} variant="outline" size="sm">Read More</Button>
          <Button as={Link} to={`/tournaments/${tournament.id}/join`} size="sm" disabled={tournament.status !== 'open'}>Join Now</Button>
        </div>
      </div>
    </Card>
  )
}

export default TournamentCard