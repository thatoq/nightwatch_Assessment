module.exports={
    '@tags': ['authenticationTests', 'writedeleteTweet'],

    'login in with existing user': (browser) => {
        const msg='Hello auitomation'
        const {username, password}= browser.globals.testData;
        const loginPage =browser.page.login();
        const homePage =browser.page.home();
        const url =browser.options.globals.testData.url

        browser
            // .maximizeWindow()
             .url(url)
        homePage
             .logIn()

        loginPage
            .setUsername(username)
            .setPassword(password)
            .submit()  
            .validation(true)

        homePage
            .writeATweet(msg)
            .deleteTweet(msg)
            .logout()
  
    }

}