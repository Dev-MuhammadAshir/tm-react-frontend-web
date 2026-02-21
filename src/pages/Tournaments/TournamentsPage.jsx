import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'
import TournamentCard from '../../components/Tournaments/TournamentCard'
import styles from './TournamentsPage.module.css'

const TournamentsPage = () => {
  const [filter, setFilter] = useState('all')
  const { data: tournaments, isLoading, error } = useQuery({
    queryKey: ['tournaments'],
    queryFn: () => api.get('/tournaments').then(res => res.data),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading tournaments</div>

  const filtered = filter === 'all' ? tournaments : tournaments.filter(t => t.status === filter)

  return (
    <div className="container">
      <h1>Tournaments</h1>
      <div className={styles.filters}>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="starting-soon">Starting Soon</option>
          <option value="closed">Closed</option>
        </select>
        <input type="search" placeholder="Search tournaments..." />
      </div>
      <div className={styles.grid}>
        {filtered.map(t => <TournamentCard key={t.id} tournament={t} />)}
      </div>
    </div>
  )
}

export default TournamentsPage