


import RegisterForm from '@/components/RegisterForm'
import React from 'react'

export const metadata = {
  title:"Register - NXTHOUSE",
  description:"Register Page"
}
const RegisterPage = () => {
  return (
    <div className="flex  items-center min-h-screen ">
      <RegisterForm />
    </div>
  )
}

export default RegisterPage