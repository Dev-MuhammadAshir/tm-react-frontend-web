import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'
import Card from '../../ui/card/Card'
import styles from './CommunityRules.module.css'

const CommunityRulesPage = () => {
  const { data: rules, isLoading, error } = useQuery({
    queryKey: ['communityRules'],
    queryFn: () => api.get('/community-rules').then(res => res.data),
  })

  if (isLoading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error loading rules</div>

  return (
    <div className="container">
      <h1 className={styles.title}>Community Rules</h1>
      <Card className={styles.rulesCard}>
        <ul className={styles.list}>
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default CommunityRulesPage