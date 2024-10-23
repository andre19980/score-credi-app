import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from "@/app/page";

describe("Page", () => {
  it("renders form", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
