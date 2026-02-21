import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import ResourceCard from './ResourceCard'
import Button from '../../ui/button/Button'
import styles from './Resources.module.css'

const ResourcesSection = () => {
  const { data: resources, isLoading, error } = useQuery({
    queryKey: ['resources'],
    queryFn: () => api.get('/resources').then(res => res.data),
  })

  if (isLoading) return <div>Loading resources...</div>
  if (error) return <div>Error loading resources</div>

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Latest Resources</h2>
          <Button as={Link} to="/resources" variant="primary">View More</Button>
        </div>
        <div className={styles.grid}>
          {resources.slice(0, 2).map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection