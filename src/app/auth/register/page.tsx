


import { auth } from '@/auth';
import RegisterForm from '@/components/RegisterForm'
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata = {
  title:"Register - NXTHOUSE",
  description:"Register Page"
}
const RegisterPage = async() => {
  const session = await auth();
  if(session?.user) {
    return redirect("/")
  }
  return (
    <div className="flex  items-center min-h-screen ">
      <RegisterForm />
    </div>
  )
}

export default RegisterPage