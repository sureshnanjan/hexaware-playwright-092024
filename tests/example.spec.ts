import { test, expect } from '@playwright/test';
import { HomePageOperations } from '../heroku-operations/home_page_operations';

test('Heroku Page has correct Title', async ({ page }) => {
  // Open the browser and navigate to Heroku App homepage
  await page.goto('https://the-internet.herokuapp.com/');

  // Read the title and check if it matched "The Internet"
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});

test("Heroku HomePage Heading is correct", async ({page})=>{
  // Open the Heroku App Home Page
  await page.goto('https://the-internet.herokuapp.com/');
  // read the heading
  const expectedHeading = "Welcome to the-internet"
  const actualHeading = await page.getByRole('heading', { name: 'Welcome to the-internet' }).textContent()
  // check whther the heading matched 
  await expect(actualHeading).toEqual(expectedHeading)

})

test("With Abstraction", () =>{
    const home = new HomePageOperations()
    const expectedHeading = "Welcome to the-internet"
    const actualHeading = home.getTitle();
    expect(actualHeading).toEqual(expectedHeading)

    // BDD - 
    // TDD
})

test("Petstore Logo", () =>{
  // Placement
  // Color
  // Size
  // Logo Picture
  // Broser // GC, FF, EDGE, Sagfary
  const home = new HomePageOperations()
  // Assert logo is on left
  const expectedPos = "left"
  const expectedcol = "blue"
  const expectedsize = 12
  const expectedPic = "jpeg"
  const actualLpgo = home.getLogoDetails()
  // Fontsize is 12 
  // GWT
  // AAA
  expect(actualLpgo).toEqual(expectedPos)
  expect(actualLpgo).toEqual(expectedcol)

})



