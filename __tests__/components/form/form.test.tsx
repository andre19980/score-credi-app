import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StepForm from "@/components/form/step-form";

describe("Page", () => {
  it("renders form", () => {
    const { container } = render(<StepForm setUser={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  describe("personal info", () => {
    describe("input validation", () => {
      describe("`name` field", () => {
        it("is required", async () => {
          render(<StepForm setUser={jest.fn()} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });

          await userEvent.click(nextButton);

          expect(
            screen.getByText("O nome deve ter pelo menos 8 caracteres."),
          ).toBeInTheDocument();
        });

        it("accepts only non-numerical characters", async () => {
          render(<StepForm setUser={jest.fn()} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputName = screen.getByLabelText("Nome");

          fireEvent.change(inputName, { target: { value: "12345678" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("O nome não pode conter números."),
          ).toBeInTheDocument();
        });

        it("must be greater than 8 characters", async () => {
          render(<StepForm setUser={jest.fn()} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputName = screen.getByLabelText("Nome");

          fireEvent.change(inputName, { target: { value: "name" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("O nome deve ter pelo menos 8 caracteres."),
          ).toBeInTheDocument();
        });
      });

      describe("`age` field", () => {
        it("is required", async () => {
          render(<StepForm setUser={jest.fn()} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });

          await userEvent.click(nextButton);

          expect(
            screen.getByText("A idade deve ser maior ou igual a 18 anos."),
          ).toBeInTheDocument();
        });

        it("accepts only numerical characters", async () => {
          render(<StepForm setUser={jest.fn()} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputAge = screen.getByLabelText("Idade");

          fireEvent.change(inputAge, { target: { value: "abc" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("A idade deve ser maior ou igual a 18 anos."),
          ).toBeInTheDocument();
        });

        it("must be greater than 18", async () => {
          render(<StepForm setUser={jest.fn()} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputAge = screen.getByLabelText("Idade");

          fireEvent.change(inputAge, { target: { value: "17" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("A idade deve ser maior ou igual a 18 anos."),
          ).toBeInTheDocument();
        });

        it("must be less than 65", async () => {
          render(<StepForm setUser={jest.fn()} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputAge = screen.getByLabelText("Idade");

          fireEvent.change(inputAge, { target: { value: "66" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("A idade deve ser menor ou igual a 65 anos."),
          ).toBeInTheDocument();
        });
      });

      describe("`name` and `age`", () => {
        it("correct case", async () => {
          render(<StepForm setUser={jest.fn()} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputName = screen.getByLabelText("Nome");
          const inputAge = screen.getByLabelText("Idade");

          fireEvent.change(inputAge, { target: { value: "30" } });
          fireEvent.change(inputName, { target: { value: "User Name Jr" } });

          await userEvent.click(nextButton);

          expect(screen.getByText("Cidade")).toBeInTheDocument();
        });
      });
    });
  });
});
