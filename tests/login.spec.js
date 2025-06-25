import { test, expect } from '@playwright/test';
import { LoginPage, login } from '../page/login'

test('Sign In', async ({ page }) => {

    const signIn = new LoginPage(page)

    await signIn.gotoPage()
    await signIn.signIn('testautomation0625@gmail.com','test@uto0625')
    await signIn.validateSignIn()

  
});