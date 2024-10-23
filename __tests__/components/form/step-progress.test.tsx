import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProgressLine from "@/components/form/step-progress";

describe("ProgressLine Component", () => {
  it("Step Personal Info", () => {
    const { container } = render(<ProgressLine currentStep={0} />);
    expect(container).toMatchSnapshot();
  });

  it("Step Address case", () => {
    const { container } = render(<ProgressLine currentStep={1} />);
    expect(container).toMatchSnapshot();
  });

  it("Step Income", () => {
    const { container } = render(<ProgressLine currentStep={2} />);
    expect(container).toMatchSnapshot();
  });
});
