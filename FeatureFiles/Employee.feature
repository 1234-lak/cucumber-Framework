Feature: Validate Emp module
Scenario Outline: 
As Admin user validate Emp with multiple data
Given user navigates url  "http://orangehrm.qedgetech.com/"
When user login as username "Admin" and passord "Qedge123!@#"
When user click login button
When user click pim and click add button
When user enter "<FirstName>" and "<MiddleName>" and "<LastName>"
When user capature eidbefore 
When user click save button
When  user capture eid after
Then user validates eid
Then user close browser
Examples:
|FirstName|MiddleName|LastName|
|Testing1|Manual1|Swlenium1|
|Testing2|Manual4|Swlenium7|
|Testing4|Manual7|Swlenium8|
|Testing6|Manual8|Swlenium0|
|Testing9|Manual0|Swlenium4|
|Testing8|Manual2|Swlenium7|
