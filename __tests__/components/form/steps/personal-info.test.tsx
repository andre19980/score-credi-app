import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PersonalInfoStep from "@/components/form/steps/personal-info";

describe("Personal Info Step", () => {
  it("renders form", () => {
    const { container } = render(<PersonalInfoStep />);
    expect(container).toMatchSnapshot();
  });
});
