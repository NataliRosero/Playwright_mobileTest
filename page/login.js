exports.LoginPage = class LoginPage {

      constructor(page) {


        this.page = page
        this.username =   page.getByRole('textbox', { name: 'Email or phone' })
        this.buttonNext = page.getByRole('button', { name: 'Next' })
        this.password = page.getByRole('textbox', { name: 'Enter your password' })
        this.buttonNextPass = page.getByRole('button', { name: 'Next' })
      }

       async gotoPage() {
        await this.page.goto('https://accounts.google.com', { waitUntil: 'domcontentloaded' });
    }

     async signIn(username, password){

        await this.username.click()
        await this.username.fill(username)
        await this.buttonNext.click()
        await this.password.click()
        await this.password.fill(password)
        await this.buttonNextPass.click()
        await this.page.waitForTimeout(5000);    
     }

     

}