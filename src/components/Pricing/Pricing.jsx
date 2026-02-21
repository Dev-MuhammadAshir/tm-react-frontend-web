import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import styles from './Pricing.module.css'

const Pricing = () => {
  const { data: plans, isLoading, error } = useQuery({
    queryKey: ['pricing'],
    queryFn: () => api.get('/pricing').then(res => res.data),
  })

  if (isLoading) return <div>Loading pricing...</div>
  if (error) return <div>Error loading pricing</div>

  return (
    <section className={styles.pricing}>
      <div className="container">
        <h2 className={styles.title}>Choose Your Plan</h2>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <Card key={plan.name} className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
              <h3>{plan.name}</h3>
              <div className={styles.price}>
                ${plan.price} <span>/ month</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feat) => (
                  <li key={feat}>✓ {feat}</li>
                ))}
              </ul>
              <Button fullWidth>{plan.cta}</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing