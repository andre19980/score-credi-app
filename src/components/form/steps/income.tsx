import { useContext } from "react";
import { motion } from "framer-motion";

import { StepFormContext } from "@/contexts/form";

export default function IncomeStep() {
  const context = useContext(StepFormContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-base font-semibold leading-7 text-gray-900 mb-3">
        Renda
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mt-4">
        <div className="sm:col-span-6">
          <label
            htmlFor="income"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Qual é sua renda mensal?
          </label>
          <div className="mt-2">
            <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="number"
                {...context?.register("income")}
                id="income"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
            {context?.errors.income?.message && (
              <p className="mt-2 text-sm text-red-500">
                {context?.errors.income.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
