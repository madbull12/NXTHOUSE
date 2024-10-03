"use client";

import React from "react";
import { Button } from "./ui/button";

import Container from "./Container";
import { Link, usePathname } from "@/lib/i18n";
import NavigationHostFooter from "./NavigationHostFooter";
import HostFooterProgression from "./HostFooterProgression";

interface Props {
  disableNext: boolean;
}

const listNextPaths: Record<string, string> = {
  overview: "about-your-place",
  "about-your-place": "structure",
  structure: "privacy-type",
  "privacy-type": "location",
  location: "floor-plan",
  "floor-plan": "stand-out",
  "stand-out": "amenities",
};
const listBackPaths: Record<string, string> = {
  "about-your-place": "overview",
  structure: "about-your-place",
  "privacy-type": "structure",
  location: "privacy-type",
  "floor-plan": "location",
  "stand-out": "floor-plan",
  amenities: "stand-out",
};
const HostFooter: React.FC<Props> = ({ disableNext }) => {
  const pathname = usePathname();
  const splittedPath = pathname.split("/");

  const nextUrl = `/${splittedPath[1]}/${splittedPath[2]}/${
    listNextPaths[splittedPath[3]]
  }`;
  const backUrl = `/${splittedPath[1]}/${splittedPath[2]}/${
    listBackPaths[splittedPath[3]]
  }`;

  const isOverviewPage = pathname.includes("/overview");

  return (
    <Container>
      <footer className="fixed bg-background z-[999] bottom-0 max-w-7xl mx-auto p-4 right-0 left-0 w-full flex flex-col gap-y-4">
        <HostFooterProgression isOverviewPage />

        {isOverviewPage ? (
          <Button className=" w-full md:w-auto self-end">
            <Link href={nextUrl} className="w-full">
              Get Started
            </Link>
          </Button>
        ) : (
          <NavigationHostFooter
            disableNext={disableNext}
            backUrl={backUrl}
            nextUrl={nextUrl}
          />
        )}
      </footer>
    </Container>
  );
};

export default HostFooter;
