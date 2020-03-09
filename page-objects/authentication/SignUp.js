const {usingXpath} = require("../../helper/locators")
const elements = {
    nameInput: usingXpath("//input[@name='name']"),
    phoneInput: usingXpath("//input[@name='phone_number']"),
    nextButton: usingXpath("//span[text()='Next']"),
    signUp: usingXpath("//span[text()='Sign up']"),
    okButton: usingXpath("//span[text()='OK']"),
    title: usingXpath("//span[text()='We sent you a code']")
   
};
const commands = [{

    setName(value) {
        return this
            .waitForElementPresent("@nameInput")
            .setValue('@nameInput', value);
    },
    setPhone(value) {
        return this
            .waitForElementPresent("@phoneInput")
            .setValue('@phoneInput', value);
    },
    clickNextButton() {
        return this
            .waitForElementPresent('@nextButton')
            .waitForElementVisible('@nextButton')
            .click('@nextButton');
    },
    clickSignUp() {
        return this
            .waitForElementPresent('@signUp')
            .click('@signUp');
    },
    clickoKButton() {
        return this
            .waitForElementPresent('@okButton')
            .click('@okButton');
    },
    validation()
     {
          this
               .expect.url().to.contain('https://twitter.com/i/flow/signup')
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
        return `${browser.options.globals.testData.url}/i/flow/signup`;
    }
}
module.exports=pageObjects