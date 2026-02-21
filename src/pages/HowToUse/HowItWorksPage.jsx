import styles from './HowItWorks.module.css'

const steps = [
  { number: 1, title: 'Create an Account', description: 'Sign up for free in under a minute.' },
  { number: 2, title: 'Browse Tournaments', description: 'Find tournaments for your favorite games.' },
  { number: 3, title: 'Join & Pay Entry Fee', description: 'Securely pay the entry fee (if any).' },
  { number: 4, title: 'Compete & Win', description: 'Play matches and climb the leaderboard.' },
  { number: 5, title: 'Withdraw Winnings', description: 'Cash out your prize money easily.' },
]

const HowItWorksPage = () => {
  return (
    <div className="container">
      <h1 className={styles.title}>How It Works</h1>
      <div className={styles.steps}>
        {steps.map(step => (
          <div key={step.number} className={styles.step}>
            <div className={styles.number}>{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorksPage