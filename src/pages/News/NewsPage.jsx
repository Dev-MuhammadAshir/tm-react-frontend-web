import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'
import Card from '../../ui/card/Card'
import styles from './NewsPage.module.css'

const NewsPage = () => {
  const { data: news, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: () => api.get('/news').then(res => res.data),
  })

  if (isLoading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error loading news</div>

  return (
    <div className="container">
      <h1 className={styles.title}>News & Updates</h1>
      <div className={styles.grid}>
        {news.map(item => (
          <Card key={item.id} className={styles.newsCard}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p className={styles.date}>{new Date(item.date).toLocaleDateString()}</p>
              <p>{item.excerpt}</p>
              <button className={styles.readMore}>Read More</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default NewsPage