import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Status from "@/components/status";

describe("Status", () => {
  it("approved case", () => {
    const { container } = render(<Status status="true;10000" />);
    expect(container).toMatchSnapshot();
  });

  it("denied case", () => {
    const { container } = render(<Status status="false" />);
    expect(container).toMatchSnapshot();
  });
});
