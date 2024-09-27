import test from "@playwright/test";

test.beforeEach(async ({page}) => {

    await page.goto("/");
});

test.afterEach(async ({page}) => {

    await page.close();
});
//------------------------------------------------------------Common Heroku site's sub page test methos-------------------------------------------------------------
test("Verify that the 'Context Menu' page has title", () => {})

test("Validate the displayed 'Context Menu' page title", () => {})

test("Verify that the 'context Menu' Page has description" , () => {})

test("Verify that the 'Context Menu' page has a footer", () => {})

test("Validate the displayed footer text", () => {})

test("Verify that the footer has a link", () => {})

test("Validate the workign of avaialble hyper link in footer", () => {})

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------Page Specific Test Methods---------------------------------------------------------------------------

test("Validate the displayed 'Context Menu' page description", () => {})

test("Verify that the 'Context menu' page has instructions on how to use functionality", () => {})

test("Validate the displayed instruction message on the page", () => {})

test("Verify that the page has a context click area", () => {})

test("Verify that the context click functionality works when clicked inside the area", () => {})

test("Verify that the context click functionality will not work anywhere else", () => {})

test("Validate the displayed alert message", () => {})

test("Verify that the displayed alert is a basic 'alert'", () => {})