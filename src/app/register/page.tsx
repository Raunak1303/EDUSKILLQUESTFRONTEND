"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-xl bg-white dark:bg-gray-900">
        <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
          Welcome to EduSkillQuest
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Register on our website
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <LabelInputContainer>
              <Label htmlFor="fullName">FullName</Label>
              <Input id="fullName" placeholder="e.g. Raunak Raj Singh" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="Username">User name</Label>
              <Input id="Username" placeholder="Raunak16" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email id">Email Id</Label>
            <Input id="email id" placeholder="projectram@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="avatar">Avatar</Label>
            <Input id="avatar" placeholder="avatar.png" type="file" accept="image/*" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="avatar">Cover Image</Label>
            <Input id="avatar" placeholder="avatar.png" type="file" accept="image/*" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group from-blue-500 to-purple-500 block w-full text-white rounded-md h-10 font-medium shadow-lg"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className="relative group flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-lg bg-gray-50 dark:bg-gray-800"
              type="button"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Continue with Github
              </span>
              <BottomGradient />
            </button>
            <button
              className="relative group flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-lg bg-gray-50 dark:bg-gray-800"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                continue with Google
              </span>
              <BottomGradient />
            </button>
            <button
              className="relative group flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-lg bg-gray-50 dark:bg-gray-800"
              type="button"
            >
              <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Continue with Facebook
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default page;
