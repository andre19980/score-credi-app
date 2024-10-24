import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "@/components/form/form";

describe("Form", () => {
  const defaultProps = {
    currentStep: 0,
    updateStep: jest.fn(),
    handleNextStep: jest.fn(),
    handlePrevStep: jest.fn(),
  }

  it("renders form", () => {
    const { container } = render(<Form {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  describe("personal info", () => {
    describe("input validation", () => {
      describe("`name` field", () => {
        it("is required", async () => {
          render(<Form {...defaultProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });

          await userEvent.click(nextButton);

          expect(
            screen.getByText("O nome deve ter pelo menos 8 caracteres."),
          ).toBeInTheDocument();
        });

        it("accepts only non-numerical characters", async () => {
          render(<Form {...defaultProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputName = screen.getByLabelText("Nome");

          fireEvent.change(inputName, { target: { value: "12345678" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("O nome não pode conter números."),
          ).toBeInTheDocument();
        });

        it("must be greater than 8 characters", async () => {
          render(<Form {...defaultProps} />);
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
          render(<Form {...defaultProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });

          await userEvent.click(nextButton);

          expect(
            screen.getByText("A idade deve ser maior ou igual a 18 anos."),
          ).toBeInTheDocument();
        });

        it("accepts only numerical characters", async () => {
          render(<Form {...defaultProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputAge = screen.getByLabelText("Idade");

          fireEvent.change(inputAge, { target: { value: "abc" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("A idade deve ser maior ou igual a 18 anos."),
          ).toBeInTheDocument();
        });

        it("must be greater than 18", async () => {
          render(<Form {...defaultProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputAge = screen.getByLabelText("Idade");

          fireEvent.change(inputAge, { target: { value: "17" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("A idade deve ser maior ou igual a 18 anos."),
          ).toBeInTheDocument();
        });

        it("must be less than 65", async () => {
          render(<Form {...defaultProps} />);
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
          render(<Form {...defaultProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputName = screen.getByLabelText("Nome");
          const inputAge = screen.getByLabelText("Idade");

          fireEvent.change(inputAge, { target: { value: "30" } });
          fireEvent.change(inputName, { target: { value: "User Name Jr" } });

          await userEvent.click(nextButton);

          expect(
            screen.queryByText("A idade deve ser menor ou igual a 65 anos."),
          ).toBeNull();
          expect(
            screen.queryByText("A idade deve ser maior ou igual a 18 anos."),
          ).toBeNull();
          expect(
            screen.queryByText("O nome deve ter pelo menos 8 caracteres."),
          ).toBeNull();
          expect(
            screen.queryByText("O nome não pode conter números."),
          ).toBeNull();
        });
      });
    });
  });

  describe("address", () => {
    describe("input validation", () => {
      const providerProps = {
        ...defaultProps,
        currentStep: 1,
      };

      describe("`city` field", () => {
        it("is required", async () => {
          render(<Form {...providerProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });

          await userEvent.click(nextButton);

          expect(
            screen.getByText("O nome cidade não pode ser vazio."),
          ).toBeInTheDocument();
        });

        it("accepts only non-numerical characters", async () => {
          render(<Form {...providerProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputCity= screen.getByLabelText("Cidade");

          fireEvent.change(inputCity, { target: { value: "12345678" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("O nome da cidade não pode conter números."),
          ).toBeInTheDocument();
        });

        it("correct case", async () => {
          render(<Form {...providerProps} />);
          const nextButton = screen.getByRole("button", { name: "Próximo" });
          const inputCity= screen.getByLabelText("Cidade");

          fireEvent.change(inputCity, { target: { value: "test city" } });
          await userEvent.click(nextButton);

          expect(
            screen.queryByText("O nome da cidade não pode conter números."),
          ).toBeNull();
          expect(
            screen.queryByText("O nome cidade não pode ser vazio."),
          ).toBeNull();
        })
      });
    })
  })

  describe("income", () => {
    describe("input validation", () => {
      const providerProps = {
        ...defaultProps,
        currentStep: 2,
      };

      describe("`income` field", () => {
        it("is required", async () => {
          render(<Form {...providerProps} />);
          const nextButton = screen.getByRole("button", { name: "Registrar" });

          await userEvent.click(nextButton);

          expect(
            screen.getByText("A renda mensal deve ser maior que 0."),
          ).toBeInTheDocument();
        });

        it("must be greater than 0", async () => {
          render(<Form {...providerProps} />);
          const nextButton = screen.getByRole("button", { name: "Registrar" });
          const inputIncome= screen.getByLabelText("Qual é sua renda mensal?");

          fireEvent.change(inputIncome, { target: { value: "0" } });
          await userEvent.click(nextButton);

          expect(
            screen.getByText("A renda mensal deve ser maior que 0."),
          ).toBeInTheDocument();
        });

        it("correct case", async () => {
          render(<Form {...providerProps} />);
          const nextButton = screen.getByRole("button", { name: "Registrar" });
          const inputIncome= screen.getByLabelText("Qual é sua renda mensal?");

          fireEvent.change(inputIncome, { target: { value: "10000" } });
          await userEvent.click(nextButton);

          expect(
            screen.queryByText("A renda mensal deve ser maior que 0."),
          ).toBeNull();
        })
      });
    })
  })
});
