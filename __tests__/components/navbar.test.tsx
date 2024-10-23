import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Navbar from "@/components/navbar";

describe("Navbar", () => {
  it("renders component", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
