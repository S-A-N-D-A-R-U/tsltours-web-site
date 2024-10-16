import About from '@/components/About'
import ContactUs from '@/components/ContactUs'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Packages from '@/components/Packages'
import Testimonial from '@/components/Testimonial'
import UserForm from '@/components/UserForm'
import Video from '@/components/Video'
import React from 'react'

const page = () => {
  return (
    <div >
      <Hero/>
      <Feature/>
      <About/>
      <Packages/>
      <UserForm/>
      <Video/>
      <Testimonial/>
      <ContactUs/>
    </div>
  )
}

export default page
