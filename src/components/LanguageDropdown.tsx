/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IasA7fhkREA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Link,useRouter } from "@/lib/i18n";
import { setLanguageTag, languageTag } from "@/paraglide/runtime";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  // const [selectedLanguage, setSelectedLanguage] = useState("English");

  const router = useRouter();
  const handleChangeLanguage = (value: "en" | "de" | "id" ) => {
    router.push("/",{ locale:value })
  }
  console.log(languageTag());
  return (
    <>
      <Select onValueChange={handleChangeLanguage} defaultValue={languageTag()}>
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent className="z-[999]">
          <SelectItem value="en" className=" px-2 ">
            <div className="flex items-center gap-x-2">
              <img
                src="/assets/american-flag.png"
                alt=""
                className="w-[20px] h-[15px]"
              />
              <p>English</p>
            </div>
          </SelectItem>
          <SelectItem value="id" className="px-2">
            <div
              className="flex items-center gap-x-2"
              onClick={() => router.push("/", { locale: "id" })}
            >
              <img
                src="/assets/indo-flag.jpg"
                alt=""
                className="w-[20px] h-[15px]"
              />
              <p>Indonesia</p>
            </div>
          </SelectItem>
            <SelectItem value="de" className="px-2">
              <div className="flex items-center gap-x-2">
                <img
                  src="/assets/german-flag.jpg"
                  alt=""
                  className="w-[20px] h-[15px]"
                />
                <p>Deutsch</p>
              </div>
            </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
