import { z } from "zod";

export const FormDataSchema = z.object({
  name: z
    .string()
    .min(8, "O nome deve ter pelo menos 8 caracteres.")
    .refine((val) => /^[^0-9]*$/.test(val), {
      message: "O nome não pode conter números.",
    }),
  age: z.coerce
    .number({
      required_error: "Idade obrigatória.",
      invalid_type_error: "Idade deve ser um número.",
    })
    .gte(18, "A idade deve ser maior ou igual a 18 anos.")
    .lte(65, "A idade deve ser menor ou igual a 65 anos."),
  city: z
    .string()
    .min(1, "O nome cidade não pode ser vazio.")
    .refine((val) => /^[^0-9]*$/.test(val), {
      message: "O nome da cidade não pode conter números.",
    }),
  income: z.coerce.number().positive("A renda mensal deve ser maior que 0."),
});
