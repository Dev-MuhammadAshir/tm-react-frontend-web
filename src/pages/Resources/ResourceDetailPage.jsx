import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import api from '../../services/api'
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import styles from './Resources.module.css'

const ResourceDetailPage = () => {
  const { id } = useParams()
  const { data: resources, isLoading, error } = useQuery({
    queryKey: ['resources'],
    queryFn: () => api.get('/resources').then(res => res.data),
  })

  if (isLoading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error loading resource</div>

  const resource = resources?.find(r => r.id === parseInt(id))

  if (!resource) return <div className="container">Resource not found</div>

  return (
    <div className="container">
      <div className={styles.detail}>
        <img src={resource.image} alt={resource.title} className={styles.detailImage} />
        <Card className={styles.detailContent}>
          <span className={styles.category}>{resource.category}</span>
          <h1>{resource.title}</h1>
          <p className={styles.date}>Published on {new Date(resource.date).toLocaleDateString()}</p>
          <p className={styles.fullDescription}>
            This is a detailed description of the resource. In a real application, you would fetch the full content from the API.
          </p>
          <Button as={Link} to="/resources" variant="outline">← Back to Resources</Button>
        </Card>
      </div>
    </div>
  )
}

export default ResourceDetailPage