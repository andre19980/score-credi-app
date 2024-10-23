import { useContext } from "react";

import { StepFormContext, FORM_STEPS } from "./step-form";

export default function Actions() {
  const context = useContext(StepFormContext);
  const isLastStep = context?.currentStep === FORM_STEPS.length - 1;
  const isFirstStep = context?.currentStep === 0;

  return (
    <div className="flex justify-between pt-4 mt-8 border-t">
      <button
        type="button"
        className={`${isFirstStep ? "text-gray-600 bg-gray-100" : "text-gray-900 bg-white"} py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
        onClick={context?.handlePrevStep}
        disabled={isFirstStep}
      >
        Voltar
      </button>

      {isLastStep ? (
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Registrar
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={context?.handleNextStep}
        >
          Próximo
        </button>
      )}
    </div>
  );
}
