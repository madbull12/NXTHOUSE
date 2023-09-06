"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import { User } from "@prisma/client";
import { usePathname } from "next/navigation";
import Container from "./Container";

interface Props {
  disableNext:boolean;
}
const HostFooter: React.FC<Props> = ({ disableNext }) => {
  const pathname = usePathname();
  console.log(pathname)
  const splittedPath = pathname.split("/");
  console.log(splittedPath);

  const listNextPaths: Record<string, string> = {
    "overview": "about-your-place",
    "about-your-place": "structure",
    "structure":"privacy-type",
    "privacy-type":"location",
    "location":"floor-plan",
    "floor-plan":"stand-out"
  };
  const listBackPaths: Record<string, string> = {
    "about-your-place": "overview",
    "structure":"about-your-place",
    "privacy-type":"structure",
    "location":"privacy-type",
    "floor-plan":"location",
    "stand-out":"floor-plan"
  };

  const nextLink = `/${splittedPath[1]}/${splittedPath[2]}/${
    listNextPaths[splittedPath[3]]
  }`;
  const backLink = `/${splittedPath[1]}/${splittedPath[2]}/${
    listBackPaths[splittedPath[3]]
  }`;

  const isOverviewPage = pathname.includes("/overview");

  return (
    <Container>
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

            <Button disabled={disableNext} className="bg-foreground px-8">
              <Link href={nextLink} className="w-full">
                Next
              </Link>
            </Button>
          </div>
        )}
      </footer>
    </Container>
  );
};

export default HostFooter;
