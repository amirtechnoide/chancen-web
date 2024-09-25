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

const SigninForm = () => {
  return (
    <div className=" ">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-xl">Login</CardTitle>
          <CardDescription>
            Login to access your chancen dashboard{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-light text-xs ">Email</p>
            <Input placeholder="Enter email" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-light text-xs ">Password</p>
            <Input placeholder="Enter email" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Log in</Button>
        </CardFooter>
      </Card>

      <p className="text-white text-sm text-center mt-9">
        {" Forgot password?"} -{" "}
        <Link href="/auth/forgot-password" className="text-green-500">
          recover
        </Link>
      </p>
    </div>
  );
};

export default SigninForm;
