import { test, expect } from '@playwright/test';

test('Heroku Page has correct Title', async ({ page }) => {
  // Open the browser and navigate to Heroku App homepage
  await page.goto('/');

  // Read the title and check if it matched "The Internet"
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});

test("Heroku HomePage Heading is correct", async ({page})=>{
  // Open the Heroku App Home Page
  await page.goto('/');
  // read the heading
  const expectedHeading = "Welcome to the-internet"
  const actualHeading = await page.getByRole('heading', { name: 'Welcome to the-internet' }).textContent()
  // check whther the heading matched 
  await expect(actualHeading).toEqual(expectedHeading)

})


