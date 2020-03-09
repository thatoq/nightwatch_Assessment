### NIGHTWATCH
##### Design Pattern
######## Page Object Model
##### TESTS
######## loginTest - Coverage 100%
######## loginTestFailure - Coverage 100%
######## SignUp - Coverage 75% state reason: requires external API to read email/OTP
####### ForgotPassword - Coverage 75% state reason: requires external API to read email/OTP
######## userCanWriteTweet - Coverage 100%
##### Code Analysis
####### Eslint
#### How to Run Feature Test on Windows using Visual Studio Code
Step1 open the project in VSCode
Step2 navigate to tests\feature\Authentication
Step3 open the testfile and copy the test tag on line 2 e.g."loginSuccess" for loginTest
Step4 click to open package.json replace the existing tag with the one of the test you want to run e.g. "loginSuccess"
step5 on terminal navigate to the Assessment folder and type "npm run test" on terminal & press enter
#### How to Run E2ETest on Windows using Visual Studio Code
Step1 open the project in VSCode
Step2 navigate to tests\e2e\
Step3 open the testfile and copy the test tag on line 2 e.g."writedeleteTweet"
Step4 click to open package.json replace the existing tag with the one of the test you want to run e.g. "writedeleteTweet"
step5 on terminal navigate to the Assessment folder and type "npm run test" on terminal & press enter
Step6 To view screenshots & rport navigate to tests_output folder...the report will be named generatedReport.html


