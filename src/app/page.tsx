import HouseList from "@/components/HouseList";
import TotalPriceBtn from "@/components/TotalPriceBtn";


export default async function Home() {
  

  return (
    <main className="min-h-screen max-w-7xl mx-auto">
      <TotalPriceBtn />
      <HouseList />
    </main>
  );
}
