import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Tools from '../components/Tools'
import LearningPaths from '../components/LearningPaths'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Tools />
      <LearningPaths />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home
