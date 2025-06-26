import { test, expect } from '@playwright/test';
import { LoginPage, login } from '../page/login'
import path from 'path';
import fs from 'fs';

test('Sign In OK', async ({ page }, testInfo) => {

    const signIn = new LoginPage(page)

    await signIn.gotoPage()
    await signIn.signIn('testautomation0625@gmail.com', 'test@uto0625')
    await signIn.validateSignIn()

    // Carpeta donde se crean evidencias
    const folderPath = path.resolve('docs/evidencias');

    // Captura de pantalla
    const screenshotPath = path.join(folderPath, 'login-exitoso.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });

    // Adjuntar video si está disponible en el reporte
    if (testInfo.video) {
        const videoPath = path.join(folderPath, 'login-exitoso.mp4');
        await testInfo.attach('video', { path: videoPath, contentType: 'video/mp4' });
    }

 

});