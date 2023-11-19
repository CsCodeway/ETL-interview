"use client";

import { useState } from "react";
import Basic from "@/components/Basic";
import InterMediate from "@/components/InterMediate";
import Advance from "@/components/Advance";
import Final from "@/components/Final";

export default function Home() {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    contact: "",
    ques1: "",
    ques2: "",
    ques3: "",
    location: "",
    interviewDate: "",
    interviewTime: "",
    timeZone: "",
    interviewMedium: "",
  });

  const [fileData, setFileData] = useState({
    Marksheet10: null,
    Marksheet12: null,
    GraduationMarksheet: null,
    PostGraduationMarksheet: null,
    OfferLetter: null,
    SalarySlips: null,
    BankStatement: null,
    Increments: null,
    Others: null,
  });

  const validateBasicStep = () => {
    return formData.name.trim() === "" || formData.email.trim() === "";
  };

  const validateIntermediateStep = () => {
    return (
      fileData.Marksheet10 === null ||
      fileData.Marksheet12 === null ||
      fileData.GraduationMarksheet === null ||
      fileData.OfferLetter === null ||
      fileData.SalarySlips === null ||
      fileData.BankStatement === null
    );
  };

  const validateAdvanceStep = () => {};

  const nextStep = () => {
    let isStepValid = true;

    switch (step) {
      case 1:
        isStepValid = validateBasicStep();
        break;
      case 2:
        isStepValid = validateIntermediateStep();
        break;
      case 3:
        isStepValid = validateAdvanceStep();
        break;

      default:
        break;
    }

    if (isStepValid) {
      setShow(true);
    } else {
      setStep(step + 1);
      setShow(false);
    }
  };

  const updateFormData = (field, value, isFile = false, limitWords) => {
    if (field === "contact" && value.length > 10) {
      return;
    }

    if (limitWords && value.split(/\s+/).length > 300) {
      return;
    }

    if (isFile) {
      setFileData({
        ...fileData,
        [field]: value,
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const updateFileData = (field, file) => {
    setFileData((prevFileData) => ({
      ...prevFileData,
      [field]: file,
    }));
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <Basic formData={formData} updateFormData={updateFormData} />;
      case 2:
        return (
          <InterMediate
            formData={formData}
            updateFormData={updateFormData}
            updateFileData={updateFileData}
            fileData={fileData}
          />
        );
      case 3:
        return <Advance formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Final formData={formData} fileData={fileData} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="shadow-lg w-[90%] sm:min-w-[40%] sm:max-w-[60%] xl:w-[25%] rounded-lg bg-[#FFFFFF] max-h-screen">
        <div className="bg-[#DDEEFB] p-8 rounded-t-lg">
          <p className="font-medium text-xl">Name of the Enquiry Form</p>
          <p className="pt-4 text-sm text-[#595d60]">
            One line description of the form
          </p>
          <p className="pt-4 text-xs text-[#A8AEB3]">
            Provide the following information to the process your application
          </p>
          {show && (
            <p className="text-red-500 font-mono text-xs pt-4">
              All (*) marked fields are mandatory
            </p>
          )}
        </div>
        <div className="rounded-b-lg max-h-[500px] mt-5 overflow-y-scroll ">
          {renderFormStep()}
          <div className="text-right w-full pt-6 pr-6 pb-3">
            {step < 4 && (
              <button
                className="bg-blue-500 rounded-full text-white px-3 py-1"
                onClick={nextStep}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
