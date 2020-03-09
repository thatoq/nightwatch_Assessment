module.exports={
    '@tags': ['authenticationTests', 'ForgotPassword'],

    'Forgot Password test case': (browser) => {
        const {username}= browser.globals.testData;
        const forgotPasswordPage =browser.page.forgotPassword();
        console.log("testD : "+JSON.stringify(browser.options.globals.testData))
        const urlLogin =browser.page.forgotPassword().url(browser);
        console.log("url :"+urlLogin)

        browser
        .url(urlLogin)

        forgotPasswordPage
        .setEmail(username)
        .clickSearchButton()
        .checkEmailOption()
        .clickContinueButton()
        .validation()
        

        browser
        .saveScreenshot("tests_output/screenshots/success.png")
        

    }
}