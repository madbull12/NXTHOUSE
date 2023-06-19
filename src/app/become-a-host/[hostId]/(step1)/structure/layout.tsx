import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
    title:"Choose your property type - NXTHOUSE",
    description:"This is where you define your type of your property"
}

const LayoutPage = ({ children }: { children:React.ReactNode}) => {
  return (
    <>
        {children}
    </>
  )
}

export default LayoutPage