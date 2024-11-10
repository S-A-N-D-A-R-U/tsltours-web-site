import React from 'react'
import Image from "next/image";

type FeatureItem = {
    URL: string;
    title: string;
    des: string;
}

const FeatureItem = ({title, URL, des}: FeatureItem ) => {
  return (
    <div className='mx-3 '>
     <div className='overflow-hidden relative h-[50vh]'>
        <Image
        src={URL}
        alt="img"
        height={600}
        width={510}
        className='hover:scale-105 hover:rotate-2 transition-all duration-700 object-cover h-[50vh] rounded-t-md '
        
        />
     </div>
     <div className='bg-slate-100 px-5 py-3 rounded-b-md'>
        <div className='font-bold text-xl'>{title}</div>
        <div>{des}</div>
     </div>
    </div>
  )
}

export default FeatureItem
