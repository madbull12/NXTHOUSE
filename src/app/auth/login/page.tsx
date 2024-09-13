import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"Login - NXTHOUSE",
  description:"Login Page"
}
const SigninPage = () => {

  return (
    <div className="flex  items-center min-h-screen ">
      <LoginForm />
    </div>
  );
};

export default SigninPage;
