"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import { User } from "@prisma/client";
import { usePathname } from "next/navigation";

interface Props {
  to: string;
  session: User;
  back?: string;
}
const HostFooter: React.FC<Props> = ({ session }) => {
  const pathname = usePathname();
  const splittedPath = pathname.split("/");
  console.log(splittedPath);

  const listNextPaths: Record<string, string> = {
    "overview": "about-your-place",
    "about-your-place": "structure",
    "structure":"privacy-type",
    "privacy-type":"location"
  };
  const listBackPaths: Record<string, string> = {
    "about-your-place": "overview",
    "structure":"about-your-place",
    "privacy-type":"structure",
    "location":"privacy-type"
  };

  const nextLink = `/become-a-host/${session?.id}/${
    listNextPaths[splittedPath[3]]
  }`;
  const backLink = `/become-a-host/${session?.id}/${
    listBackPaths[splittedPath[3]]
  }`;

  const isOverviewPage = pathname.includes("/overview");

  return (
    <>
      <footer className="fixed bg-background z-[999] bottom-0 max-w-7xl mx-auto p-4 right-0 left-0 w-full flex flex-col gap-y-4">
        {!isOverviewPage ? (
          <div className="flex  items-center gap-x-1 ">
            <div className="h-2 bg-gray-200 flex-[0.33]"></div>
            <div className="h-2 bg-gray-200  flex-[0.33]"></div>
            <div className="h-2 bg-gray-200  flex-[0.33]"></div>
          </div>
        ) : <div className="h-2 w-full bg-gray-200"></div>}

        {isOverviewPage ? (
          <Button className="bg-accent hover:bg-accent w-full md:w-auto self-end">
            <Link href={nextLink} className="w-full">
              Get Started
            </Link>
          </Button>
        ) : (
          <div className="flex justify-between items-center w-full">
            <Link href={backLink} className="font-[500] underline">
              Back
            </Link>

            <Button className="bg-foreground px-8">
              <Link href={nextLink} className="w-full">
                Next
              </Link>
            </Button>
          </div>
        )}
      </footer>
    </>
  );
};

export default HostFooter;
