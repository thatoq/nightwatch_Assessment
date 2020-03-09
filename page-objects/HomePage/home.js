const {usingXpath} = require("../../helper/locators")
const elements = {
    signIn: usingXpath('//span[text()="Log in"]'),
   // textfieldTweet: usingXpath('//*[@class="DraftEditor-root"]//span'),
    textfieldTweet: usingXpath("//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']"),
    btnTweet: usingXpath('(//span[text()="Tweet"])[1]'),
};
const commands = [{
    logIn() {
        return this
            .waitForElementPresent("@signIn")
            .click('@signIn');
    },
    writeATweet(msg){
        return this
        .waitForElementPresent("@textfieldTweet")
        .setValue('@textfieldTweet', msg)
        .waitForElementPresent("@btnTweet")
        .click('@btnTweet')
        .waitForElementPresent(usingXpath(`//span[text()='${msg}']`))
        
    },
    deleteTweet(msg){
        return this
        .click(usingXpath(`(//span[text()='${msg}']/../..//div[@dir="ltr"])[2]`))
        .waitForElementPresent(usingXpath("//span[text()='Delete']"))
        .click(usingXpath("//span[text()='Delete']"))
        .waitForElementPresent(usingXpath("//span[text()='Delete']"))
        .click(usingXpath("//span[text()='Delete']"))
        .waitForElementNotPresent(usingXpath(`//span[text()='${msg}']`))
    },
    logout(){
        return this
        .waitForElementPresent(usingXpath("//*[@data-testid='AppTabBar_More_Menu']/*//div"))
        .click(usingXpath("//*[@data-testid='AppTabBar_More_Menu']/*//div"))
        .waitForElementPresent(usingXpath("//*/span[text()='Log out']"))
        .click(usingXpath("//*/span[text()='Log out']"))
        .waitForElementPresent(usingXpath("//span[text()='Log out']"))
       // .expect.url().to.contain("https://twitter.com/logout")
        .click(usingXpath("//span[text()='Log out']"))
        .end()
    }

}];
const pageObjects={
    commands:commands,
    elements:elements,
    url:function(browser){
        return `${browser.options.globals.testData.url}`;
    }
}
module.exports=pageObjects