import HouseList from "@/components/HouseList";
import TotalPriceBtn from "@/components/TotalPriceBtn";
import { auth } from "@/lib/auth";


export default async function Home() {
  const session = await auth()

  return (
    <main className="min-h-screen max-w-7xl mx-auto p-4">
      {/* <TotalPriceBtn />
      <HouseList /> */}
    </main>
  );
}
