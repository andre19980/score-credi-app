import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe("Register new user", () => {
  test("Navigation", async ({ page }) => {
    // Personal info
    await page.getByLabel('Nome').fill('Username');
    await page.getByLabel('Idade').fill('40');

    await page.getByRole('button', { name: 'Próximo' }).click();

    // Address
    await page.getByLabel('Cidade').fill('City Location');
    await page.getByRole('button', { name: 'Próximo' }).click();

    // Income
    await expect(page.getByText('Renda Mensal')).toBeVisible();
    await page.getByRole('button', { name: 'Voltar' }).click();

    // Back Address
    await expect(page.getByText('Endereço')).toBeVisible()
    await page.getByRole('button', { name: 'Voltar' }).click();

    // Back Info Step
    await expect(page.getByText('Dados Pessoais')).toBeVisible()
  });

  test("Approved case", async ({ page }) => {
    // Personal info
    await page.getByLabel('Nome').fill('Username');
    await page.getByLabel('Idade').fill('40');

    await page.getByRole('button', { name: 'Próximo' }).click();

    // Address
    await page.getByLabel('Cidade').fill('City Location');

    await page.getByRole('button', { name: 'Próximo' }).click();

    // Income
    await page.getByLabel('Qual é sua renda mensal?').fill('20000');

    await page.getByRole('button', { name: 'Registrar' }).click();

    // Result
    await expect(page.getByText('Parabéns! Seu crédito de R$ 10.000 foi aprovado e estará disponível em breve.')).toBeVisible();
  })

  test("Denied case", async ({ page }) => {
    // Personal info
    await page.getByLabel('Nome').fill('Username');
    await page.getByLabel('Idade').fill('40');

    await page.getByRole('button', { name: 'Próximo' }).click();

    // Address
    await page.getByLabel('Cidade').fill('City Location');

    await page.getByRole('button', { name: 'Próximo' }).click();

    // Income
    await page.getByLabel('Qual é sua renda mensal?').fill('2000');

    await page.getByRole('button', { name: 'Registrar' }).click();

    // Result
    await expect(page.getByText('Infelizmente você não preencheu os requisitos para a aprovação do crédtio. Para mais informações, consulte nosso material no site oficial.')).toBeVisible();
  })
})
