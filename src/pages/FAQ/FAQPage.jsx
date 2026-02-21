import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'
import Card from '../../ui/card/Card'
import styles from './FAQPage.module.css'

const FAQPage = () => {
  const { data: faqs, isLoading, error } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => api.get('/faqs').then(res => res.data),
  })

  if (isLoading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error loading FAQs</div>

  return (
    <div className="container">
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <Card key={index} className={styles.faqItem}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            {faq.img && faq.username && (
              <div className={styles.userInfo}>
                <img src={faq.img} alt={faq.username} />
                <span>{faq.username}</span>
                <span className="views">Total Views: {faq.totalViews}</span>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FAQPage
