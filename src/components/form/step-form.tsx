import { useState, createContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useForm,
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormReset,
  type FieldErrors,
  type SubmitHandler,
} from "react-hook-form";

import { FormDataSchema } from "@/lib/schema";

import ProgressLine from "./step-progress";
import Form from "./form";
import PersonalInfoStep from "./steps/personal-info";
import AddressStep from "./steps/address";
import IncomeStep from "./steps/income";

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

export type FormType = z.infer<typeof FormDataSchema>;

export interface StepFormContextType {
  currentStep: number;
  updateStep: React.Dispatch<React.SetStateAction<number>>;
  handleNextStep: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
  handlePrevStep: () => void;
  register: UseFormRegister<FormType>;
  handleSubmit: UseFormHandleSubmit<FormType>;
  onSubmit: SubmitHandler<FormType>;
  reset: UseFormReset<FormType>;
  errors: FieldErrors<FormType>;
}

export const StepFormContext = createContext<StepFormContextType | null>(null);

export default function StepForm({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [currentStep, updateStep] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(FormDataSchema),
  });

  type FieldName = keyof FormType;

  const handleNextStep = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const fields = FORM_STEPS[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < FORM_STEPS.length - 1) {
      updateStep((curStep) => curStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      updateStep((curStep) => curStep - 1);
    }
  };

  const onSubmit: SubmitHandler<FormType> = async (formData) => {
    const res = await fetch("http://localhost:8080/api/credito-analise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.status === "APPROVED") {
      const val = `true;${data.max_amount.toString()}`;

      sessionStorage.setItem("user_approved", val);
      setUser(val);
    } else {
      const val = "false";

      sessionStorage.setItem("user_approved", val);
      setUser(val);
    }
  };

  const formContext = {
    currentStep,
    updateStep,
    handleNextStep,
    handlePrevStep,
    register,
    handleSubmit,
    onSubmit,
    reset,
    errors,
  } as StepFormContextType;

  return (
    <StepFormContext.Provider value={formContext}>
      <div className="flex flex-col justify-center items-center gap-y-16 sm:col-start-2 sm:col-span-2">
        <ProgressLine currentStep={currentStep} />
        <div className="bg-gray-50 w-full p-6 rounded">
          <Form />
        </div>
      </div>
    </StepFormContext.Provider>
  );
}
