'use client'

import Container from '@/components/Container'
import HostFooter from '@/components/HostFooter'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { AiOutlineWifi } from 'react-icons/ai'
import { FiMonitor } from 'react-icons/fi'
import { MdOutlineKitchen } from 'react-icons/md'
import { GiWashingMachine } from 'react-icons/gi'
import { useHousingStore } from '@/lib/zustand'
type Amenity = {
  title:string;
  icon:React.ReactNode;
}
const AmenitiesPage = () => {
  const { housing,deleteAmenity,addAmenities } = useHousingStore();
  console.log(housing.amenities)
  const amenities:Amenity[] = [{
    title:"wifi",
    icon:<AiOutlineWifi />
  },{
    title:"TV",
    icon:<FiMonitor />
  },{
    title:"kitchen",
    icon:<MdOutlineKitchen />
  },{
    title:"washer",
    icon:<GiWashingMachine />
  }];

  const handleAmenities =(value:string)=>{
    if(housing.amenities.includes(value)) {
      deleteAmenity(value)
    } else {
      addAmenities(value)
    }
  }
  
  return (
    <Container>
        <div className="flex min-h-[90vh] l  gap-x-4 mx-auto py-16 flex-col max-w-2xl  justify-center leading-[3rem]">
            <h1 className="text-3xl font-[500]">Tell guests what your place has to offer</h1>
            <p>You can add more amenities after you publish your listing.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {amenities.map((x)=>(
                <div onClick={()=>handleAmenities(x.title)} className={cn(`ring-1 cursor-pointer ring-ring p-4 space-y-8 rounded-lg`,housing.amenities.includes(x.title)&&"ring-2")} key={crypto.randomUUID()}>
                  <p className='capitalize text-lg tracking-wider'>{x.title}</p>
                  <span className="text-xl">{x.icon}</span>
                </div>
              ))}
            </div>
        </div>
        <HostFooter disableNext={true} />
    </Container>
  )
}

export default AmenitiesPage