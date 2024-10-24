import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import ProgressLine from "./step-progress";
import Form from "./form";
import PersonalInfoStep from "./steps/personal-info";
import AddressStep from "./steps/address";
import IncomeStep from "./steps/income";

import { FormType } from "./types";

export enum STEPS {
  PERSONAL = 0,
  ADDRESS = 1,
  INCOME = 2,
}

export const FORM_STEPS = [
  {
    id: STEPS.PERSONAL,
    fields: ["name", "age"],
    component: <PersonalInfoStep />,
  },
  {
    id: STEPS.ADDRESS,
    fields: ["city"],
    component: <AddressStep />,
  },
  { id: STEPS.INCOME, fields: ["income"], component: <IncomeStep /> },
];

export default function StepForm() {
  const [currentStep, updateStep] = useState(0);

  const handleNextStep = async (e: React.MouseEvent<HTMLElement>, canGoNext: boolean) => {
    e.preventDefault();

    if (!canGoNext) return;

    if (currentStep < FORM_STEPS.length - 1) {
      updateStep((curStep) => curStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      updateStep((curStep) => curStep - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-16 sm:col-start-2 sm:col-span-2">
      <ProgressLine currentStep={currentStep} />
      <div className="bg-gray-50 w-full p-6 rounded">
        <Form
          currentStep={currentStep}
          updateStep={updateStep}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      </div>
    </div>
  );
}
