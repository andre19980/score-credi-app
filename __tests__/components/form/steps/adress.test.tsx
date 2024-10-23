import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Adress from "@/components/form/steps/address";

describe("Adress Step", () => {
  it("renders form", () => {
    const { container } = render(<Adress />);
    expect(container).toMatchSnapshot();
  });
});
