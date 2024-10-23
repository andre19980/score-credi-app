import { useContext } from "react";

import Actions from "./actions";
import { StepFormContext, FORM_STEPS } from "./step-form";

export default function Form() {
  const context = useContext(StepFormContext);

  return (
    <form onSubmit={context?.handleSubmit(context?.onSubmit)}>
      {typeof context?.currentStep === "number" &&
        FORM_STEPS[context?.currentStep].component}
      <Actions />
    </form>
  );
}
