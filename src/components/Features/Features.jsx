import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'
import Card from '../../ui/card/Card'
import styles from './Features.module.css'

const Features = () => {
  const { data: features, isLoading, error } = useQuery({
    queryKey: ['features'],
    queryFn: () => api.get('/features').then(res => res.data),
  })

  if (isLoading) return <div>Loading features...</div>
  if (error) return <div>Error loading features</div>

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.title}>Why Choose Us</h2>
        <div className={styles.grid}>
          {features.map((feature) => (
            <Card key={feature.id} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features