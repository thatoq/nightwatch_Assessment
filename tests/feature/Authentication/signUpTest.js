module.exports={
    '@tags': ['authenticationTests', 'SignUp'],

    'Sign Up test case': (browser) => {
        const {username}= browser.globals.testData;
        const signUpPage =browser.page.SignUp();
        console.log("testD : "+JSON.stringify(browser.options.globals.testData))
        const url =browser.page.SignUp().url(browser);
        console.log("url :"+url)

        browser
        .url(url)

        signUpPage
        .setName("test")
        .setPhone("0783218561")
        .clickNextButton()
        .clickNextButton()
        .clickSignUp()
        .clickoKButton()
        .validation()
        
        browser
        .saveScreenshot("tests_output/screenshots/success.png")
        

    }
}