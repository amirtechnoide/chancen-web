import * as yup from "yup";

const personalInfoSchema = yup.object({
    name: yup.string().required("Name is required"),
    age: yup
      .number()
      .required("Age is required")
      .min(1, "Age must be at least 1"),
    email: yup.string().email("Invalid email").required("Email is required"),
  });
  
const academicInfoSchema = yup.object({
    course: yup.string().required("Course is required"),
    grade: yup.string().required("Grade is required"),
  });
  
const documentSchema = yup.object({
    documents: yup
      .mixed()
      .required("Document is required")
      .test("fileSize", "File size is too large", (value) => {
        const fileList = value as FileList;
        return fileList && fileList[0]?.size <= 5 * 1024 * 1024; // 5 MB max size
      })
      .test("fileType", "Unsupported file type", (value) => {
        const fileList = value as FileList;
        return (
          fileList &&
          ["application/pdf", "image/jpeg", "image/png"].includes(
            fileList[0]?.type
          )
        );
      }),
  });

export { personalInfoSchema, academicInfoSchema, documentSchema };