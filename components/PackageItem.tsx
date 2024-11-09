import React from 'react'

type PackageItem = {
    imageURL: string;
    title: string;
    price:string;
    des: string;
    duration: string;
}
const PackageItem = ({title, imageURL , price, des, duration}: PackageItem) => {
  return (
    <div>
        {title}
      
    </div>
  )
}

export default PackageItem
