import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface BtnProps {
  isLoading: boolean;
  handleClick: () => void;
  text: string;
}

const ButtonWithLoading: React.FC<BtnProps> = ({
  isLoading,
  text,
  handleClick,
}) => {
  return (
    <Button disabled={isLoading} onClick={handleClick} className="w-full">
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}

      {isLoading ? "Please wait" : text}
    </Button>
  );
};

export default ButtonWithLoading;
