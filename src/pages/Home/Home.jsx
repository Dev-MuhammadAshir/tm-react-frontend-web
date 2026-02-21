import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import TournamentSection from '../../components/Tournaments/TournamentSection'
import Pricing from '../../components/Pricing/Pricing'
import ResourcesSection from '../../components/Resources/ResourcesSection'
import Chatbot from '../../components/Chatbot/Chatbot'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <TournamentSection />
      <Pricing />
      <ResourcesSection />
      <Chatbot />
    </>
  )
}

export default Home