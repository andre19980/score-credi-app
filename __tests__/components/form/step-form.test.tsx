import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import StepForm from "@/components/form/step-form";

describe("StepForm component", () => {
  it("renders form", () => {
    const { container } = render(<StepForm />);
    expect(container).toMatchSnapshot();
  });
});
