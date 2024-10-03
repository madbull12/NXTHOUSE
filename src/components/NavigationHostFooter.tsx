import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  nextUrl: string;
  backUrl: string;
  disableNext: boolean;
}

const NavigationHostFooter: React.FC<Props> = ({
  nextUrl,
  backUrl,
  disableNext,
}) => {
  return (
    <nav className="flex justify-between items-center w-full">
      <Link href={backUrl} className="font-[500] underline">
        Back
      </Link>

      <Button disabled={disableNext} className=" px-8">
        <Link href={nextUrl} className="w-full">
          Next
        </Link>
      </Button>
    </nav>
  );
};

export default NavigationHostFooter;
