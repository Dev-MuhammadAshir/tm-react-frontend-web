import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'
import Card from '../../ui/card/Card'
import styles from './HelpCenter.module.css'

const HelpCenterPage = () => {
  const { data: topics, isLoading, error } = useQuery({
    queryKey: ['helpTopics'],
    queryFn: () => api.get('/help-topics').then(res => res.data),
  })

  if (isLoading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error loading help topics</div>

  return (
    <div className="container">
      <h1 className={styles.title}>Help Center</h1>
      <div className={styles.grid}>
        {topics.map(topic => (
          <Card key={topic.id} className={styles.topic}>
            <h3>{topic.title}</h3>
            <p>{topic.content}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HelpCenterPage