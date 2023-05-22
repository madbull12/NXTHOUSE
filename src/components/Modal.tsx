
import React from 'react'

import Overlay from './Overlay'
import { AiOutlineClose } from 'react-icons/ai'
const Modal = () => {
  return (
    <Overlay>
        <div className='bg-primary max-w-lg '>
            <header className='flex gap-x-4 border p-4'>
                <AiOutlineClose />
                <h2 className='font-bold'>Log in or sign up</h2>
            </header>
            <form className='p-4'>
                <h1>Welcome to NXTHOUSE</h1>
            </form>
        </div>
    </Overlay>
  )
}

export default Modal