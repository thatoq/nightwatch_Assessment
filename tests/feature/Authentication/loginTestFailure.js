module.exports={
    '@tags': ['authenticationTests', 'loginFail'],

    'Login test case with wrong username': (browser) => {
        const {username, password}= browser.globals.testData;
        const loginPage =browser.page.login();
        console.log("testD : "+JSON.stringify(browser.options.globals.testData))
        const urlLogin =browser.page.login().url(browser);
        console.log("url :"+urlLogin)
        
        browser
        .url(urlLogin)

        loginPage
        .setUsername('ghgfhygj')
        .setPassword(password)
        .submit() 
        .validation(false)
        browser
        .saveScreenshot("tests_output/screenshots/failure.png")  
    }
}