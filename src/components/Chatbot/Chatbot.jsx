import { useState, useEffect } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from './Chatbot.module.css'

const quickQuestions = [
  'How to join a tournament?',
  'What payment methods?',
  'Is there a refund policy?',
  'How do I contact support?',
]

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true)
    }, 5000) // Show after 5 seconds
    return () => clearTimeout(timer)
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
    setShowWelcome(false)
  }

  return (
    <>
      {/* Floating button */}
      <button className={styles.chatButton} onClick={handleOpen}>
        <ChatBubbleLeftRightIcon className={styles.icon} />
      </button>

      {/* Welcome message popup */}
      {showWelcome && !isOpen && (
        <div className={styles.welcomePopup}>
          <p>👋 Need help? Chat with us!</p>
          <button onClick={handleOpen} className={styles.startChat}>
            Start chat
          </button>
          <button className={styles.closePopup} onClick={() => setShowWelcome(false)}>
            <XMarkIcon width={16} />
          </button>
        </div>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <span>Support Chat</span>
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon width={20} />
            </button>
          </div>
          <div className={styles.messages}>
            <div className={styles.botMessage}>
              Hello! How can I help you today?
            </div>
          </div>
          <div className={styles.quickQuestions}>
            {quickQuestions.map((q) => (
              <button key={q} className={styles.quickBtn}>
                {q}
              </button>
            ))}
          </div>
          <div className={styles.inputArea}>
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot