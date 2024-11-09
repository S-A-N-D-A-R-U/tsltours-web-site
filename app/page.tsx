import About from '@/components/About'
import Blog from '@/components/Blog'
import ContactUs from '@/components/ContactUs'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Packages from '@/components/Packages'
import Testimonial from '@/components/Testimonial'
import TourPackages from '@/components/TourPackages'
import UserForm from '@/components/UserForm'
import Video from '@/components/Video'

const page = () => {
  return (
    <div >
      <Hero/>
      <Feature/>
      <About/>
      <Packages/>
      <Video/>
      <Testimonial/>
      <TourPackages/>
      <Blog/>
      <ContactUs/>
    </div>
  )
}

export default page
