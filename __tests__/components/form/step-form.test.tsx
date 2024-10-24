import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StepForm from "@/components/form/step-form";

describe("StepForm component", () => {
  it("renders form", () => {
    const { container } = render(<StepForm />);
    expect(container).toMatchSnapshot();
  });
});
