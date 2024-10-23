import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Income from "@/components/form/steps/income";

describe("Income Step", () => {
  it("renders form", () => {
    const { container } = render(<Income />);
    expect(container).toMatchSnapshot();
  });
});
