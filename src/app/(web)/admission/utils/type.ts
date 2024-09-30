export interface PersonalInfo {
    name: string;
    age: number;
    email: string;
}

export interface AcademicInfo {
    course: string;
    grade: string;
}

export interface DocumentInfo {
    documents: FileList; // FileList to handle multiple file uploads (even if just one file)
}

export interface FormData extends PersonalInfo, AcademicInfo, DocumentInfo {}