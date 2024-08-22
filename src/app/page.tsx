import InputForm from "@/components/InputForm";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Home Todo Application",
  description: "A todo app for learning purpose",
};
const Homepage = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-300
     w-full min-h-screen flex flex-col items-center py-5 px-2 lg:px-0"
    >
      <div className="w-full md:max-w-screen-md mx-auto bg-bodyColor flex flex-col gap-5 rounded-md p-2  md:p-4">
        <InputForm />
      </div>
    </div>
  );
};

export default Homepage;
