import React from "react";

interface Props {
  isOverviewPage: boolean;
}
const HostFooterProgression:React.FC<Props> = ({ isOverviewPage }) => {
  return (
    <>
      {!isOverviewPage ? (
        <div className="flex  items-center gap-x-1 ">
          <div className="h-2 bg-gray-200 flex-[0.33]"></div>
          <div className="h-2 bg-gray-200  flex-[0.33]"></div>
          <div className="h-2 bg-gray-200  flex-[0.33]"></div>
        </div>
      ) : (
        <div className="h-2 w-full bg-gray-200"></div>
      )}
    </>
  );
};

export default HostFooterProgression;
