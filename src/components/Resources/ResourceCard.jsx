import { Link } from 'react-router-dom'
import Card from '../../ui/card/Card'
import styles from './Resources.module.css'

const ResourceCard = ({ resource }) => {
  return (
    <Card className={styles.resourceCard}>
      <img src={resource.image} alt={resource.title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.category}>{resource.category}</span>
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
        <Link to={`/resources/${resource.id}`} className={styles.readMore}>Read More →</Link>
      </div>
    </Card>
  )
}

export default ResourceCard