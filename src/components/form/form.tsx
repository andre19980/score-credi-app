import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import Actions from "./actions";
import { FORM_STEPS } from "./step-form";

import { FormDataSchema } from "@/lib/schema";
import { UserContext } from "@/contexts/user";
import { StepFormContext, StepFormContextType, FormType } from "@/contexts/form";

type FormComponentPropsType = Pick<StepFormContextType, "currentStep" | "updateStep" | "handleNextStep" | "handlePrevStep">

export default function Form({
  currentStep,
  updateStep,
  handleNextStep,
  handlePrevStep
}: FormComponentPropsType) {
  const userContext = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(FormDataSchema),
  });

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
      userContext?.setUser(val);
    } else {
      const val = "false";

      sessionStorage.setItem("user_approved", val);
      userContext?.setUser(val);
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
    trigger,
    errors,
  } as StepFormContextType;

  return (
    <StepFormContext.Provider value={formContext}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {typeof currentStep === "number" &&
          FORM_STEPS[currentStep].component}
        <Actions />
      </form>
    </StepFormContext.Provider>
  );
}
