import { useContext } from "react";
import { motion } from "framer-motion";

import { StepFormContext } from "@/contexts/form";

export default function AddressStep() {
  const context = useContext(StepFormContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-base font-semibold leading-7 text-gray-900 mb-3">
        Endereço
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mt-4">
        <div className="sm:col-span-6">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Cidade
          </label>
          <div className="mt-2">
            <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="text"
                {...context?.register("city")}
                id="city"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
            {context?.errors.city?.message && (
              <p className="mt-2 text-sm text-red-500">
                {context?.errors.city.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
