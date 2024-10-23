import { STEPS } from "./step-form";
import { PersonalSVG, AddressSVG, IncomeSVG } from "./icons";

export default function ProgressLine({ currentStep }: { currentStep: number }) {
  const icons = {
    [STEPS.PERSONAL]: {
      svg: <PersonalSVG />,
    },
    [STEPS.ADDRESS]: {
      svg: <AddressSVG />,
    },
    [STEPS.INCOME]: {
      svg: <IncomeSVG />,
    },
  };

  return (
    <ol className="flex items-center w-full px-4 sm:px-16">
      <IconStep
        icon={icons[STEPS.PERSONAL].svg}
        isComplete={currentStep >= 0}
      />
      <IconStep icon={icons[STEPS.ADDRESS].svg} isComplete={currentStep >= 1} />
      <IconStep icon={icons[STEPS.INCOME].svg} isComplete={currentStep >= 2} />
    </ol>
  );
}

interface IconStepType {
  icon: JSX.Element;
  isComplete: boolean;
}

function IconStep({ icon, isComplete }: IconStepType) {
  const incomplete =
    "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-100";
  const completed =
    "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-500";

  const after =
    "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block";
  const before =
    "before:content-[''] before:w-full before:h-1 before:border-b before:border-4 before:inline-block";

  return (
    <li
      className={`${before} first:before:content-none last:after:content-none flex w-full items-center ${after}`}
    >
      <span
        className={`${isComplete ? completed : incomplete} flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0`}
      >
        {icon}
      </span>
    </li>
  );
}
