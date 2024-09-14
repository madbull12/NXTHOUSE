import HouseList from "@/components/HouseList";
import TotalPriceBtn from "@/components/TotalPriceBtn";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
// import * as m from '@/paraglide/messages'

export default async function Home() {
  const session = await auth();
  if(!session?.user) {
    return redirect("/auth/login")
  }

  return (
    <main className="min-h-screen max-w-7xl mx-auto p-4">
      <TotalPriceBtn />
      <HouseList />
    </main>
  );
}
