// app/types/educationExperienceTypes.ts

export type Education = {
  title: string;
  jurusan: string;
  tahun: string;
  description: string;
  gpa?: string;
};

export type Experience = {
  title: string;
  pt: string;
  pekerjaan: string;
  tahun: string;
  description: string;
};
