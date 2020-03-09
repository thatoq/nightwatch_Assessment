const {usingXpath} = require("../../helper/locators")
const elements = {
    signIn: usingXpath('//button[text()="Sign in"]'),
    usernameInput: usingXpath('(//input[@name="session[username_or_email]"])[1]'),
    passwordInput:usingXpath('(//input[@name="session[password]"])[1]'),
    loginButton: usingXpath('//span[text()="Log in"]'),
   
};
const commands = [{
    signIn() {
        return this
            .waitForElementPresent("@signIn")
            .click('@signIn');
    },
    setUsername(value) {
        return this
            .waitForElementPresent("@usernameInput")
            .click('@usernameInput')
            .setValue('@usernameInput', value);
    },
    setPassword(value) {
        return this
            .waitForElementPresent("@passwordInput")
            .click('@passwordInput')
            .setValue('@passwordInput', value);
    },
    submit() {
        return this
            .waitForElementPresent("@loginButton")
            .click('@loginButton');
    },
    validation(isSuccess){
     if(isSuccess)
     {
         return
        this.expect.url().to.contain('https://twitter.com/home');
        
     }
     else
     {
         return
        this.expect.url().to.contain('https://twitter.com/login');
     }
    }
}];
const pageObjects={
    commands:commands,
    elements:elements,
    url:function(browser){
        console.log("testD2 : "+JSON.stringify(browser.options.globals.testData))
        return `${browser.options.globals.testData.url}/login`;
    }
}
module.exports=pageObjects