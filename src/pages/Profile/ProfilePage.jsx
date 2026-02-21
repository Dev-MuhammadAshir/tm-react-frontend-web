import { useAuth } from '../../context/AuthContext'
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  const { user, logout } = useAuth()

  return (
    <div className="container">
      <h1 className={styles.title}>My Profile</h1>
      <div className={styles.grid}>
        <Card className={styles.profileCard}>
          <h2>Account Information</h2>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <Button onClick={logout} variant="outline">Logout</Button>
        </Card>

        <Card className={styles.statsCard}>
          <h2>Tournament Stats</h2>
          <div className={styles.stat}>
            <span>Tournaments Joined</span>
            <strong>12</strong>
          </div>
          <div className={styles.stat}>
            <span>Wins</span>
            <strong>3</strong>
          </div>
          <div className={styles.stat}>
            <span>Total Winnings</span>
            <strong>$450</strong>
          </div>
        </Card>

        <Card className={styles.historyCard}>
          <h2>Recent Activity</h2>
          <ul>
            <li>Joined "Valorant Summer Cup" - 2 days ago</li>
            <li>Withdrew $100 - 5 days ago</li>
            <li>Won "CS2 Pro League" - 1 week ago</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default ProfilePage