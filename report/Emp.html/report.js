$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Employee.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Emp module",
  "description": "",
  "id": "validate-emp-module",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "",
  "description": "As Admin user validate Emp with multiple data",
  "id": "validate-emp-module;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates url  \"http://orangehrm.qedgetech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login as username \"Admin\" and passord \"Qedge123!@#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click pim and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter \"\u003cFirstName\u003e\" and \"\u003cMiddleName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user capature eidbefore",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click save button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user capture eid after",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user validates eid",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validate-emp-module;;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "MiddleName",
        "LastName"
      ],
      "line": 15,
      "id": "validate-emp-module;;;1"
    },
    {
      "cells": [
        "Testing1",
        "Manual1",
        "Swlenium1"
      ],
      "line": 16,
      "id": "validate-emp-module;;;2"
    },
    {
      "cells": [
        "Testing2",
        "Manual4",
        "Swlenium7"
      ],
      "line": 17,
      "id": "validate-emp-module;;;3"
    },
    {
      "cells": [
        "Testing4",
        "Manual7",
        "Swlenium8"
      ],
      "line": 18,
      "id": "validate-emp-module;;;4"
    },
    {
      "cells": [
        "Testing6",
        "Manual8",
        "Swlenium0"
      ],
      "line": 19,
      "id": "validate-emp-module;;;5"
    },
    {
      "cells": [
        "Testing9",
        "Manual0",
        "Swlenium4"
      ],
      "line": 20,
      "id": "validate-emp-module;;;6"
    },
    {
      "cells": [
        "Testing8",
        "Manual2",
        "Swlenium7"
      ],
      "line": 21,
      "id": "validate-emp-module;;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "As Admin user validate Emp with multiple data",
  "id": "validate-emp-module;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates url  \"http://orangehrm.qedgetech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login as username \"Admin\" and passord \"Qedge123!@#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click pim and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter \"Testing1\" and \"Manual1\" and \"Swlenium1\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user capature eidbefore",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click save button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user capture eid after",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user validates eid",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "EmpSteps.user_navigates_url(String)"
});
formatter.result({
  "duration": 9310664100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    },
    {
      "val": "Qedge123!@#",
      "offset": 44
    }
  ],
  "location": "EmpSteps.user_login_as_username_and_passord(String,String)"
});
formatter.result({
  "duration": 317398300,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_login_button()"
});
formatter.result({
  "duration": 15147329400,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_pim_and_click_add_button()"
});
formatter.result({
  "duration": 2475623700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing1",
      "offset": 12
    },
    {
      "val": "Manual1",
      "offset": 27
    },
    {
      "val": "Swlenium1",
      "offset": 41
    }
  ],
  "location": "EmpSteps.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 425697200,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capature_eidbefore()"
});
formatter.result({
  "duration": 50938000,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_save_button()"
});
formatter.result({
  "duration": 903772100,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capture_eid_after()"
});
formatter.result({
  "duration": 60463700,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_validates_eid()"
});
formatter.result({
  "duration": 165800,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_close_browser()"
});
formatter.result({
  "duration": 180443500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "As Admin user validate Emp with multiple data",
  "id": "validate-emp-module;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates url  \"http://orangehrm.qedgetech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login as username \"Admin\" and passord \"Qedge123!@#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click pim and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter \"Testing2\" and \"Manual4\" and \"Swlenium7\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user capature eidbefore",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click save button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user capture eid after",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user validates eid",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "EmpSteps.user_navigates_url(String)"
});
formatter.result({
  "duration": 7399611300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    },
    {
      "val": "Qedge123!@#",
      "offset": 44
    }
  ],
  "location": "EmpSteps.user_login_as_username_and_passord(String,String)"
});
formatter.result({
  "duration": 240704700,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_login_button()"
});
formatter.result({
  "duration": 2163076500,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_pim_and_click_add_button()"
});
formatter.result({
  "duration": 1212322700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing2",
      "offset": 12
    },
    {
      "val": "Manual4",
      "offset": 27
    },
    {
      "val": "Swlenium7",
      "offset": 41
    }
  ],
  "location": "EmpSteps.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 390940600,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capature_eidbefore()"
});
formatter.result({
  "duration": 45262600,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_save_button()"
});
formatter.result({
  "duration": 695023900,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capture_eid_after()"
});
formatter.result({
  "duration": 60894200,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_validates_eid()"
});
formatter.result({
  "duration": 86300,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_close_browser()"
});
formatter.result({
  "duration": 136732800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "As Admin user validate Emp with multiple data",
  "id": "validate-emp-module;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates url  \"http://orangehrm.qedgetech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login as username \"Admin\" and passord \"Qedge123!@#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click pim and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter \"Testing4\" and \"Manual7\" and \"Swlenium8\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user capature eidbefore",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click save button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user capture eid after",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user validates eid",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "EmpSteps.user_navigates_url(String)"
});
formatter.result({
  "duration": 7366834200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    },
    {
      "val": "Qedge123!@#",
      "offset": 44
    }
  ],
  "location": "EmpSteps.user_login_as_username_and_passord(String,String)"
});
formatter.result({
  "duration": 259482000,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_login_button()"
});
formatter.result({
  "duration": 1266522600,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_pim_and_click_add_button()"
});
formatter.result({
  "duration": 1531718100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing4",
      "offset": 12
    },
    {
      "val": "Manual7",
      "offset": 27
    },
    {
      "val": "Swlenium8",
      "offset": 41
    }
  ],
  "location": "EmpSteps.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 441069100,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capature_eidbefore()"
});
formatter.result({
  "duration": 51437300,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_save_button()"
});
formatter.result({
  "duration": 657258100,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capture_eid_after()"
});
formatter.result({
  "duration": 43344300,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_validates_eid()"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_close_browser()"
});
formatter.result({
  "duration": 158294900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "As Admin user validate Emp with multiple data",
  "id": "validate-emp-module;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates url  \"http://orangehrm.qedgetech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login as username \"Admin\" and passord \"Qedge123!@#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click pim and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter \"Testing6\" and \"Manual8\" and \"Swlenium0\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user capature eidbefore",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click save button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user capture eid after",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user validates eid",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "EmpSteps.user_navigates_url(String)"
});
formatter.result({
  "duration": 7939299700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    },
    {
      "val": "Qedge123!@#",
      "offset": 44
    }
  ],
  "location": "EmpSteps.user_login_as_username_and_passord(String,String)"
});
formatter.result({
  "duration": 245709600,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_login_button()"
});
formatter.result({
  "duration": 3943228500,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_pim_and_click_add_button()"
});
formatter.result({
  "duration": 1220365200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing6",
      "offset": 12
    },
    {
      "val": "Manual8",
      "offset": 27
    },
    {
      "val": "Swlenium0",
      "offset": 41
    }
  ],
  "location": "EmpSteps.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 392605900,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capature_eidbefore()"
});
formatter.result({
  "duration": 49463500,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_save_button()"
});
formatter.result({
  "duration": 739016300,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capture_eid_after()"
});
formatter.result({
  "duration": 43096800,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_validates_eid()"
});
formatter.result({
  "duration": 71000,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_close_browser()"
});
formatter.result({
  "duration": 171828200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "As Admin user validate Emp with multiple data",
  "id": "validate-emp-module;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates url  \"http://orangehrm.qedgetech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login as username \"Admin\" and passord \"Qedge123!@#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click pim and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter \"Testing9\" and \"Manual0\" and \"Swlenium4\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user capature eidbefore",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click save button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user capture eid after",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user validates eid",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "EmpSteps.user_navigates_url(String)"
});
formatter.result({
  "duration": 7278950700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    },
    {
      "val": "Qedge123!@#",
      "offset": 44
    }
  ],
  "location": "EmpSteps.user_login_as_username_and_passord(String,String)"
});
formatter.result({
  "duration": 249310200,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_login_button()"
});
formatter.result({
  "duration": 2737708500,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_pim_and_click_add_button()"
});
formatter.result({
  "duration": 1934120400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing9",
      "offset": 12
    },
    {
      "val": "Manual0",
      "offset": 27
    },
    {
      "val": "Swlenium4",
      "offset": 41
    }
  ],
  "location": "EmpSteps.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 405804900,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capature_eidbefore()"
});
formatter.result({
  "duration": 53000700,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_save_button()"
});
formatter.result({
  "duration": 808535200,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capture_eid_after()"
});
formatter.result({
  "duration": 54291900,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_validates_eid()"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_close_browser()"
});
formatter.result({
  "duration": 178876100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "As Admin user validate Emp with multiple data",
  "id": "validate-emp-module;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates url  \"http://orangehrm.qedgetech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login as username \"Admin\" and passord \"Qedge123!@#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click pim and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter \"Testing8\" and \"Manual2\" and \"Swlenium7\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user capature eidbefore",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click save button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user capture eid after",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user validates eid",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "EmpSteps.user_navigates_url(String)"
});
formatter.result({
  "duration": 7391198900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    },
    {
      "val": "Qedge123!@#",
      "offset": 44
    }
  ],
  "location": "EmpSteps.user_login_as_username_and_passord(String,String)"
});
formatter.result({
  "duration": 303372800,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_login_button()"
});
formatter.result({
  "duration": 2766123100,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_pim_and_click_add_button()"
});
formatter.result({
  "duration": 6692704800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing8",
      "offset": 12
    },
    {
      "val": "Manual2",
      "offset": 27
    },
    {
      "val": "Swlenium7",
      "offset": 41
    }
  ],
  "location": "EmpSteps.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 363254500,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capature_eidbefore()"
});
formatter.result({
  "duration": 26958300,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_click_save_button()"
});
formatter.result({
  "duration": 999568900,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_capture_eid_after()"
});
formatter.result({
  "duration": 51501100,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_validates_eid()"
});
formatter.result({
  "duration": 93800,
  "status": "passed"
});
formatter.match({
  "location": "EmpSteps.user_close_browser()"
});
formatter.result({
  "duration": 122063300,
  "status": "passed"
});
});