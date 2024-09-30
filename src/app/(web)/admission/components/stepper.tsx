// src/app/components/StepperForm.tsx
"use client";
import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  personalInfoSchema,
  academicInfoSchema,
  documentSchema,
} from "../utils/validation";
import { FormData } from "../utils/type";
import { Steps } from "./steps";

const StepperForm: React.FC = () => {
  const [step, setStep] = useState<number>(1); // Manage current step

  // Set up React Hook Form with validation resolver
  const methods = useForm<FormData>({
    resolver: yupResolver(
      yup.lazy((values) => {
        switch (step) {
          case 1:
            return personalInfoSchema;
          case 2:
            return academicInfoSchema;
          case 3:
            return documentSchema;
          default:
            return yup.object();
        }
      })
    ),
    mode: "onChange", // Validate on change
  });
  ``;
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = methods;

  // Go to the next step
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    // Send the form data to the server or handle it accordingly
  };

  return (
    <div className="mx-auto flex flex-col rounded-md lg:my-40 lg:grid lg:max-w-[850px] lg:items-center lg:bg-white lg:p-6 lg:shadow-md">
      {/* <!-- Stepper --> */}
      <ul className="relative flex mb-10 gap-x-2  w-full mx-auto">
        {/* <!-- Item --> */}
        <li className="shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
              1
            </span>
            <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
          </div>
        </li>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <li className="shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
              2
            </span>
            <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
          </div>
        </li>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <li className="shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
              3
            </span>
            {/* <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div> */}
          </div>
        </li>
        {/* <!-- End Item --> */}
      </ul>
      {/* <!-- End Stepper --> */}
      {/* <Steps /> */}

      {/* Using FormProvider to pass down form methods */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              <p className="text-red-500">{errors.name?.message}</p>

              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" {...register("age")} />
              <p className="text-red-500">{errors.age?.message}</p>

              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
          )}

          {/* Step 2: Academic Information */}
          {step === 2 && (
            <div>
              <Label htmlFor="course">Course</Label>
              <Input id="course" {...register("course")} />
              <p className="text-red-500">{errors.course?.message}</p>

              <Label htmlFor="grade">Grade</Label>
              <Input id="grade" {...register("grade")} />
              <p className="text-red-500">{errors.grade?.message}</p>
            </div>
          )}

          {/* Step 3: Document Submission */}
          {step === 3 && (
            <div>
              <Label htmlFor="documents">Upload Required Documents</Label>
              <Input id="documents" type="file" {...register("documents")} />
              <p className="text-red-500">{errors.documents?.message}</p>

              {/* Show selected file */}
              {watch("documents") && (
                <p className="mt-2 text-sm text-green-600">
                  File uploaded: {watch("documents")[0]?.name}
                </p>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <Button type="button" onClick={prevStep}>
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={handleSubmit(nextStep)}>
                Next
              </Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepperForm;
