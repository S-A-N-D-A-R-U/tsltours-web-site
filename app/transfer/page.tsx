import CallToAction from '@/components/Transfer/CallToAction'
import FAQ from '@/components/Transfer/FAQ'
import Features from '@/components/Transfer/Features'
import Fleet from '@/components/Transfer/Fleet'
import Hero from '@/components/Transfer/Hero'
import PopularRoutes from '@/components/Transfer/PopularRoutes'
import Safety from '@/components/Transfer/Safety'
import TransferForm from '@/components/Transfer/TransferForm'
import React from 'react'

const TransferPage = () => {
  return (
    <div className='min-h-screen  bg-gray-50'>
        <Hero/>
        <div className='max-w-7xl mx-auto'>
        <TransferForm/>
        <Features/>
        <PopularRoutes/>
        <Fleet/>
        <FAQ/>
        <Safety/>
        </div>
        <CallToAction/>
    </div>
  )
}

export default TransferPage
