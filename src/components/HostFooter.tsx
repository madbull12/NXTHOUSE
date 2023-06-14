"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";
import { User } from "@prisma/client";

interface Props {
  to: string;
  session: User;
}
const HostFooter: React.FC<Props> = ({ to, session }) => {
  const mergedLink = `/become-a-host/${session?.id}${to}`;

  return (
    <footer className="fixed bg-white border-t-8 bottom-0 max-w-7xl mx-auto p-4 right-0 left-0 w-full flex flex-row-reverse">
      {to === "/overview" ? (
        <Button className="bg-accent hover:bg-accent w-full md:w-auto">
          <Link href={mergedLink}>Get Started</Link>
        </Button>
      ) : (
        <div className="flex justify-between items-center w-full">
            <Link href="" className="font-[500] underline">Back</Link>

            <Button className="bg-stone-900 px-8">
                <Link href={mergedLink}>Next</Link>
            </Button>
        </div>
      )}
    </footer>
  );
};

export default HostFooter;
