import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
    title:"Choose what type of place will guests have",
    description:"This is where you define your type of place"
}

const LayoutPage = ({ children }: { children:React.ReactNode}) => {
  return (
    <>
        {children}
    </>
  )
}

export default LayoutPage