module.exports={
    '@tags': ['authenticationTests', 'loginSuccess'],

    'Login test case with correct credential': (browser) => {
        const {username, password}= browser.globals.testData;
        const loginPage =browser.page.login();
        console.log("testD : "+JSON.stringify(browser.options.globals.testData))
        const urlLogin =browser.page.login().url(browser);
        console.log("url :"+urlLogin)

        browser
        .url(urlLogin)

        loginPage
        .setUsername(username)
        .setPassword(password)
        .submit()  
        .validation(true)

        browser
        .saveScreenshot("tests_output/screenshots/success.png")
        

    }
}