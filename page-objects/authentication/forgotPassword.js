const {usingXpath} = require("../../helper/locators")
const elements = {
    emailAddInput: usingXpath("//input[@name='account_identifier']"),
    searchButton: usingXpath("//input[@value='Search']"),
    email:usingXpath("(//input[@type='radio'])[2]"),
    continue:usingXpath("//input[@value='Continue']"),
    title:usingXpath("//div[text()='Check your email']")
   
};
const commands = [{

    setEmail(value) {
        return this
            .waitForElementPresent("@emailAddInput")
            .setValue('@emailAddInput', value);
    },
    clickSearchButton() {
        return this
            .waitForElementPresent("@searchButton")
            .click('@searchButton');
    },
    checkEmailOption() {
        return this
            .waitForElementPresent("@email")
            .click('@email');
    },
    clickContinueButton() {
        return this
            .waitForElementPresent("@continue")
            .click('@continue');
    },
    validation()
     {
          this
               .expect.url().to.contain('https://twitter.com/account/reset_email_sent')
          this
               .waitForElementPresent("@title");  
               return this;
     }
}];
const pageObjects={
    commands:commands,
    elements:elements,
    url:function(browser){
        console.log("testD2 : "+JSON.stringify(browser.options.globals.testData))
        return `${browser.options.globals.testData.url}/account/begin_password_reset`;
    }
}
module.exports=pageObjects