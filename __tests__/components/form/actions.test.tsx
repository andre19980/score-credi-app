import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Actions from "@/components/form/actions";
import { StepFormContext } from "@/components/form/form";
import { StepFormContextType } from "@/components/form/types";

const customRender = (ui: JSX.Element, { providerProps, ...renderOptions }: { providerProps: StepFormContextType }) => {
  return render(
    <StepFormContext.Provider value={providerProps}>{ui}</StepFormContext.Provider>,
    renderOptions,
  )
}


describe("Actions Form Component", () => {
  const defaultProps = {
    currentStep: 0,
    updateStep: jest.fn(),
    handleNextStep: jest.fn(),
    handlePrevStep: jest.fn(),
    register: jest.fn(),
    trigger: jest.fn(),
    handleSubmit: jest.fn(),
    onSubmit: jest.fn(),
    reset: jest.fn(),
    errors: {},
  }

  describe("render steps components", () => {
    let providerProps: StepFormContextType;

    it("Step Personal Info", () => {
      const { container } = customRender(<Actions />, { providerProps: defaultProps });
      expect(container).toMatchSnapshot();
    });
  
    it("Step Address case", () => {
      providerProps = {
        ...defaultProps,
        currentStep: 1,
      };

      const { container } = customRender(<Actions />, { providerProps });
      expect(container).toMatchSnapshot();
    });
  
    it("Step Income", () => {
      providerProps = {
        ...defaultProps,
        currentStep: 2,
      };

      const { container } = customRender(<Actions />, { providerProps });
      expect(container).toMatchSnapshot();
    });
  })
});
