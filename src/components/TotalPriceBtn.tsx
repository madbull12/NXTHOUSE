"use client"

import React, { useState } from 'react'
import { Separator } from './ui/separator'
import { Switch } from './ui/switch'
import { AiOutlineCheck } from 'react-icons/ai'

const SwitchTotalPriceBtn = () => {

    const [isChecked,setIsChecked] = useState<boolean>(false) 

    const handleToggle = () => {
        setIsChecked((prev)=>!prev)
    }

    console.log(isChecked)
    return (
        <Switch className='ml-auto h-8 w-16' onCheckedChange={handleToggle}  hasIcon={isChecked} icon={<AiOutlineCheck />}>
            
        </Switch>

    )
}

const TotalPriceBtn = () => {
  return (
    <div className='mt-4 border rounded-lg gap-x-2  max-w-2xl flex items-center  mx-auto px-4 py-6 bg-transparent'>
        <p className='font-semibold text-sm'>Tampilkan harga total</p>
        <Separator className='bg-black' orientation='vertical'  />
        <p className='text-gray-500 text-sm'>Termasuk semua biaya,sebelum pajak</p>
        <SwitchTotalPriceBtn />
    </div>
  )
}

export default TotalPriceBtn