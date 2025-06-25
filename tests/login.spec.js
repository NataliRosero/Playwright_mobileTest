import { test, expect } from '@playwright/test';
import { LoginPage, login } from '../page/login'

test('inicio sesin', async ({ page }) => {

    const signIn = new LoginPage(page)

    await signIn.gotoPage()
    await signIn.signIn('testautomation0625@gmail.com','test@uto0625')

  
  /*await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AdBytiNE526O9U-t_w3N5os4fo6-EpBHA2OEoMFWr85_BWR2g-TvPPTKem_J9cBkjrPR9ABREEXIVw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-365581011%3A1750870556403593');
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill(' testautomation0625@gmail.com');
  await page.getByRole('checkbox', { name: 'Show password' }).check();
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('checkbox', { name: 'Show password' }).uncheck();
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('test@uto0625');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Cancelar' }).click();
  await page.locator('input[type="text"]').click();
  await page.getByRole('button', { name: 'Omitir' }).click();
  await page.locator('div').filter({ hasText: /^Recibidos$/ }).nth(3).click();
*/

});