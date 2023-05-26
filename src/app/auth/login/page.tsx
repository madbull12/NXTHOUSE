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
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SigninPage = () => {
  const onSubmit = (formData: z.infer<typeof loginSchema>) => {
    console.log(formData);
  };
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <div className="flex  items-center min-h-screen ">
      <div className="border p-4 min-w-[500px] mx-auto rounded-lg">
        <h1 className="text-2xl font-bold">Login</h1>
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
                    <Input placeholder="test@example.com" {...field} />
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
                      placeholder="Type your password here"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2 justify-center w-full">
              <Separator orientation="horizontal" className="flex-[0.4]"/>
              <span  className="font-bold">OR</span>
              <Separator orientation="horizontal" className="flex-[0.4]" />
            </div>

            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SigninPage;
