import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import styles from './PricingPage.module.css'

const PricingPage = () => {
  const { data: plans, isLoading } = useQuery({
    queryKey: ['pricing'],
    queryFn: () => api.get('/pricing').then(res => res.data),
  })

  const { data: faqs } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => api.get('/faqs').then(res => res.data),
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="container">
      <h1>Pricing Plans</h1>
      <div className={styles.grid}>
        {plans.map(plan => (
          <Card key={plan.name} className={styles.plan}>
            <h3>{plan.name}</h3>
            <div className={styles.price}>${plan.price}/mo</div>
            <ul>
              {plan.features.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            <Button>{plan.cta}</Button>
          </Card>
        ))}
      </div>

      <h2>Compare Features</h2>
      <table className={styles.compareTable}>
        <thead>
          <tr><th>Feature</th><th>Free</th><th>Basic</th><th>Pro</th></tr>
        </thead>
        <tbody>
          <tr><td>Tournament Access</td><td>✅</td><td>✅</td><td>✅</td></tr>
          <tr><td>Priority Support</td><td>❌</td><td>✅</td><td>✅</td></tr>
          <tr><td>Custom Branding</td><td>❌</td><td>❌</td><td>✅</td></tr>
        </tbody>
      </table>

      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        {faqs?.map((faq, idx) => (
          <div key={idx}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className={styles.guarantee}>
        <span>🔒 7-Day Money-Back Guarantee</span>
        <Button variant="outline">See Refund Policy</Button>
      </div>
    </div>
  )
}

export default PricingPage