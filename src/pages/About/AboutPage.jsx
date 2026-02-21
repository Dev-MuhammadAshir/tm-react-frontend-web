import styles from './About.module.css'

const AboutPage = () => {
  return (
    <div className="container">
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>
          We are the leading platform for competitive gaming tournaments, connecting players worldwide. 
          Our mission is to create fair, exciting, and community-driven competitions with real prizes.
        </p>
      </section>

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          To provide a seamless gaming experience for players of all levels, encourage community growth,
          and ensure transparency and fairness in all tournaments.
        </p>
      </section>

      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {[
            { name: 'Muhammad Ashir', role: 'Founder & CEO', img: 'https://placehold.co/150x150?text=M...Ashir' },
            { name: 'Maria Lee', role: 'Community Manager', img: 'https://placehold.co/150x150?text=Maria' },
            { name: 'Daniel Kim', role: 'Lead Developer', img: 'https://placehold.co/150x150?text=Daniel' },
            { name: 'Sophia Chen', role: 'Marketing Head', img: 'https://placehold.co/150x150?text=Sophia' },
          ].map((member, idx) => (
            <div key={idx} className={styles.memberCard}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Core Values</h2>
        <ul>
          <li>Fairness & Transparency</li>
          <li>Community Engagement</li>
          <li>Innovation in Gaming</li>
          <li>Support for Every Player</li>
        </ul>
      </section>
    </div>
  )
}

export default AboutPage
