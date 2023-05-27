"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "@/lib/validations/auth";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (formData: z.infer<typeof loginSchema>) => {
    console.log(formData);
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        ...formData,
        callbackUrl,
        redirect: false,
      });

      if (!res?.ok) {
        router.push(callbackUrl);
      } else {
        setLoginError( "Invalid email or password");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <div className="border p-4 min-w-[500px] mx-auto rounded-lg">
      <h1 className="text-2xl font-bold">Welcome back!</h1>
      <p className="text-sm text-gray-500">Enter your credentials here</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-4 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input placeholder="test@example.com" {...field} className="focus:border-accent" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password*</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="focus:border-accent"
                    placeholder="Type your password here"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button isLoading={isLoading} className="w-full bg-accent hover:bg-accent hover:brightness-110 transition-all ease-out">
            Login
          </Button>
          <p className="text-sm">Don't have an account yet? <Link href="/auth/register" className="text-accent-foreground">Register here.</Link></p>
          <p className="text-sm font-medium text-destructive">{loginError}</p>
        </form>
      </Form>
      <div className="flex items-center gap-x-2 mt-4 justify-center w-full">
        <Separator orientation="horizontal" className="flex-[0.4]" />
        <span className="font-bold">OR</span>
        <Separator orientation="horizontal" className="flex-[0.4]" />
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        <Button
          type="button"
          onClick={() => signIn("google")}
          variant={"outline"}
          className="flex items-center gap-x-2 hover:text-white"
        >
          <FcGoogle />
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
