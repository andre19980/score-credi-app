import { z } from "zod";
import { createContext } from "react";
import {
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormReset,
  type FieldErrors,
  type SubmitHandler,
  type UseFormTrigger,
} from "react-hook-form";

import { FormDataSchema } from "@/lib/schema";

export type FormType = z.infer<typeof FormDataSchema>;

export interface StepFormContextType {
  currentStep: number;
  updateStep: React.Dispatch<React.SetStateAction<number>>;
  handleNextStep: (e: React.MouseEvent<HTMLElement>, canGoNext: boolean) => Promise<void>;
  handlePrevStep: () => void;
  register: UseFormRegister<FormType>;
  trigger: UseFormTrigger<FormType>;
  handleSubmit: UseFormHandleSubmit<FormType>;
  onSubmit: SubmitHandler<FormType>;
  reset: UseFormReset<FormType>;
  errors: FieldErrors<FormType>;
}

export const StepFormContext = createContext<StepFormContextType | null>(null);
