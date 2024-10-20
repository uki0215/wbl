"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
 children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
 const pathname = usePathname();
 const isSignIn = pathname === "/sign-in";

 return (
  <main className="bg-neutral-100 min-h-screen">
   <div className="mx-auto max-w-screen-2xl p-4">
    <nav className="flex justify-between items-center">
     <Image src="/logo.svg" height={40} width={40} alt="logo" />
     <div className="flex item-center gap-2">
      <Button asChild variant="default">
       <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
        {isSignIn ? "Sign Up" : " Login"}
       </Link>
      </Button>
     </div>
    </nav>
    <div className="flex flex-col items-center justify-center pt-4 md:pt-5">
     {children}
    </div>
   </div>
  </main >

 );
}

export default AuthLayout;