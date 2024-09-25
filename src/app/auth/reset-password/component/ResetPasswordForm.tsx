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
import Link from "next/link";
import { useRouter } from "next/navigation";

const ResetPasswordForm = () => {
  const navigate = useRouter();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-xl">Reset Password</CardTitle>
          <CardDescription>
            Enter and confirm your new password to complete the <br /> password
            reset process.{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-light text-xs ">New password</p>
            <Input type="password" placeholder="Enter new password" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-light text-xs ">Confirm pasword</p>
            <Input placeholder="Confirm password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => navigate.push("/auth/signin")}
          >
            Reset Password
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResetPasswordForm;
