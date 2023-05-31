"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { z } from "zod";
import {
  RegisterRequest,
  registerSchemaValidator,
} from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import axios, { AxiosError } from "axios";

const RegisterForm = () => {
  const form = useForm<RegisterRequest>({
    resolver: zodResolver(registerSchemaValidator),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [registerError, setRegisterError] = useState("");

  const onSubmit = async (formData: RegisterRequest) => {
    setIsLoading(true);
    const payload: RegisterRequest = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword:formData.confirmPassword
      
    };
    console.log(payload);
    console.log(formData)

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        signIn();
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setRegisterError(error.message);
        return;
      }

      if (error instanceof AxiosError) {
        setRegisterError(error.message);
        // toast.error(`${errors.email?.message}`);

        return;
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="border p-4 min-w-[500px] mx-auto rounded-lg">
      <h1 className="text-2xl font-bold">Create your account!</h1>
      <p className="text-sm text-gray-500">Let's get started with NXTHOUSE</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe"
                    {...field}
                    className="focus:border-accent"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="test@example.com"
                    {...field}
                    className="focus:border-accent"
                  />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password*</FormLabel>
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
          <Button
            isLoading={isLoading}
            className="w-full bg-accent hover:bg-accent hover:brightness-110 transition-all ease-out"
          >
            Sign up
          </Button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-accent-foreground">
              Sign in here.
            </Link>
          </p>
          <p className="text-sm font-medium text-destructive">
            {registerError}
          </p>

          {/* <p className="text-sm font-medium text-destructive">{loginError}</p> */}
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
