import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import ResourceCard from '../../components/Resources/ResourceCard'
import styles from './Resources.module.css'

const ResourcesPage = () => {
  const { data: resources, isLoading, error } = useQuery({
    queryKey: ['resources'],
    queryFn: () => api.get('/resources').then(res => res.data),
  })

  if (isLoading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error loading resources</div>

  return (
    <div className="container">
      <h1 className={styles.title}>Resources</h1>
      <div className={styles.grid}>
        {resources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

export default ResourcesPage