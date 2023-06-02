import Container from "@/components/Container";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Create your listing - NXTHOUSE",
  description: "the page to host your house",
};

const HostOverview = () => {
  console.log("fsdfs");
  return (
      <Container>
        <div className="min-h-screen">
            <p>fsdfsdfsdfsd</p>
            <p>fsdfsdfsdfsd</p>
            <p>fsdfsdfsdfsd</p>
        </div>

      </Container>
  );
};

export default HostOverview;
