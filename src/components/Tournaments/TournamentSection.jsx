import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import TournamentCard from './TournamentCard'
import Button from '../../ui/button/Button'
import styles from './Tournaments.module.css'

const TournamentSection = () => {
  const { data: tournaments, isLoading, error } = useQuery({
    queryKey: ['tournaments'],
    queryFn: () => api.get('/tournaments').then(res => res.data),
  })

  if (isLoading) return <div>Loading tournaments...</div>
  if (error) return <div>Error loading tournaments</div>

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Active Tournaments</h2>
          <Button as={Link} to="/tournaments" variant="outline">View All</Button>
        </div>
        <div className={styles.grid}>
          {tournaments.slice(0, 3).map(tournament => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TournamentSection