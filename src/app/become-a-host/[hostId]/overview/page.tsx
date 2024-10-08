
import Container from "@/components/Container";
import HostFooter from "@/components/HostFooter";
import OverviewStep from "@/components/OverviewStep";
import { Metadata } from "next";
import React from "react";


const OverviewPage = () => {
  const overviews = [
    {
      num: 1,
      image:"/assets/overview-1.jpg",
      title: "Tell us about your place",
      desc: "Share some basic info, like where it is and how many guests can stay.",
    },
    {
      num: 2,
      title: "Make it stand out",
      image:"/assets/overview-2.jpg",

      desc: "Add 3 to 5 photos a title and description—we'll help you out.",
    },
    {
      num: 3,
      title: "Finish up and publish",
      image:"/assets/overview-3.jpg",

      desc: "Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing.",
    },
  ];

  return (
    <Container>
      <div className="flex min-h-[90vh]  gap-x-4 md:items-center py-16 flex-col md:flex-row">
        <h1 className=" text-3xl md:text-5xl font-semibold leading-[1.12] w-full md:w-1/2 ">
          It's easy to get started on NXTHOUSE
        </h1>
        <div className="flex flex-col  w-full md:w-1/2">
        {overviews.map((overview)=>(
            <OverviewStep key={overview.title}  overview={overview as typeof overview} />
        ))}
        </div>
 
      </div>
      <HostFooter disableNext={true}  />
      
    </Container>
  );
};

export default OverviewPage;
