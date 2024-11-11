import About from '@/components/About'
import Blog from '@/components/Blog'
import ContactUs from '@/components/ContactUs'
import DayTours from '@/components/DayTours'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import TourPackages from '@/components/TourPackages'



const page = () => {
  return (
    <div >
      <Hero/>
      <Feature/>
      <About/>
      <TourPackages/>
      <DayTours/>
      <Blog/>
      <ContactUs/>
    </div>
  )
}

export default page
