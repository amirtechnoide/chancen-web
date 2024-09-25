"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
  const navigate = useRouter();
  return (
    <div className=" ">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email to receive an OTP code for setting up a new
            password.{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-light text-xs ">Email</p>
            <Input type="email" placeholder="Enter email" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => navigate.push("/auth/otp")}>
            Send OTP Code
          </Button>
        </CardFooter>
      </Card>

      <p className="text-white text-sm text-center mt-9 flex items-center justify-center">
        {/* {" Forgot password?"} -{" "} */}
        <Link href="/auth/forgot-password" className="text-green-500 ">
          <div className="w-fit flex gap-3 items-center">
            <MoveLeft className="w-5 h-5" /> back
          </div>
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
