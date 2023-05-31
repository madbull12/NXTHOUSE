import Image from "next/image";
import { categories } from "@/data";
import CategorySection from "@/components/CategorySection";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
export default async function Home() {
  const session =await getServerSession(authOptions);
  

  return (
    <main className="min-h-screen">

    </main>
  );
}
