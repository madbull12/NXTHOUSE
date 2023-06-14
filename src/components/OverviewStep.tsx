import Image from "next/image";
import React from "react";

interface Overview {
  num: number;
  title: string;
  desc: string;
  image: string;
}

interface Props {
  overview: Overview;
}

const OverviewStep: React.FC<Props> = ({ overview }) => {
  const { num, title, desc, image } = overview;
  return (
    <div className="flex gap-x-4 py-8 border-b ">
      <p className="text-xl font-[500]">{num}</p>
      <div className="flex flex-col">
        <h3 className="text-xl font-[500]">{title}</h3>
        <span>{desc}</span>
      </div>
      <Image alt="img" src={image} width={100} height={100} />
    </div>
  );
};

export default OverviewStep;
