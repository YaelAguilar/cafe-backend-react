import Header from "../../components/common/layout/Header"
import HeroSection from "../../components/features/home/HeroSection"
import FeaturesSection from "../../components/features/home/FeaturesSection"
import TestimonialsSection from "../../components/features/home/TestimonialsSection"
import Footer from "../../components/common/layout/Footer"

function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

export default Home

