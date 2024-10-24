import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Status from "@/components/status";
import { UserContext, UserContextType } from "@/app/page";

const customRender = (ui: JSX.Element, { providerProps, ...renderOptions }: { providerProps: UserContextType }) => {
  return render(
    <UserContext.Provider value={providerProps}>{ui}</UserContext.Provider>,
    renderOptions,
  )
}

describe("Status", () => {
  let providerProps: UserContextType;

  it("approved case", () => {
    providerProps = {
      user: "true;10000",
      setUser: jest.fn(),
    }

    const { container } = customRender(<Status />, { providerProps });
    expect(container).toMatchSnapshot();
  });

  it("denied case", () => {
    providerProps = {
      user: "false",
      setUser: jest.fn(),
    }

    const { container } = customRender(<Status />, { providerProps });
    expect(container).toMatchSnapshot();
  });
});
