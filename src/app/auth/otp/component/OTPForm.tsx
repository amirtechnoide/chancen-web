"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const OTPForm = () => {
  const navigate = useRouter();
  return (
    <div className=" ">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-xl">OTP Code</CardTitle>
          <CardDescription>
            Confirm OTP Code to set up new password{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col  items-center py-8">
          <p className="text-sm text-muted-foreground">Enter OTP code</p>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => navigate.push("/auth/reset-password")}
          >
            Confirm
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

export default OTPForm;
