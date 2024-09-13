import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata:Metadata = {
  title:"Login - NXTHOUSE",
  description:"Login Page"
}
const SigninPage = async() => {
  const session = await auth();
  if(session?.user) {
    return redirect("/")
  }
  return (
    <div className="flex  items-center min-h-screen ">
      <LoginForm />
    </div>
  );
};

export default SigninPage;
