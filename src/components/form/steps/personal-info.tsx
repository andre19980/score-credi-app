import { useContext } from "react";
import { StepFormContext } from "../step-form";

export default function PersonalInfoStep() {
  const context = useContext(StepFormContext);

  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900 mb-3">
        Dados Pessoais
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mt-4">
        <div className="sm:col-span-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="text"
                {...context?.register("name")}
                id="name"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
            {context?.errors.name?.message && (
              <p className="mt-2 text-sm text-red-500">
                {context?.errors.name.message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="age"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Idade
          </label>
          <div className="mt-2">
            <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="number"
                {...context?.register("age")}
                id="age"
                className="block flex-1 w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
            {context?.errors.age?.message && (
              <p className="mt-2 text-sm text-red-500">
                {context?.errors.age.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
