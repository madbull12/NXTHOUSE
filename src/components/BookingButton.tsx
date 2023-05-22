import React from 'react'
import { Separator } from './ui/separator'
import { Search } from 'lucide-react'

const BookingButton = () => {
  return (
    <div className='border cursor-pointer text-sm rounded-full p-2 [&>span]:px-4 flex items-center'>
        <span>Anywhere</span>
        <Separator orientation='vertical' />
        <span>Any week</span>
        <Separator orientation='vertical' />

        <span className='text-gray-400'>Add guests</span>
        <div className='w-6 h-6 bg-accent rounded-full place-items-center grid'>
            <Search size={15} color='white' />
        </div>
    </div>
  )
}

export default BookingButton