"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = !["/register", "/login"].includes(pathname);

  return (
    <div>
      {showNavbar && (
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
      )}
      {children}
    </div>
  );
}
