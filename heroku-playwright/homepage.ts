import { HomePageOperations } from "../heroku-operations/home_page_operations";
import { test, expect } from '@playwright/test';
export class HomePagePW implements HomePageOperations{
    // Locators
    getTitle(): string {
        await page.goto('https://the-internet.herokuapp.com/');
        // read the heading
        //const expectedHeading = "Welcome to the-internet"
        const actualHeading = await page.getByRole('heading', { name: 'Welcome to the-internet' }).textContent()
        return actualHeading;
    }
    getSubTitle(): string {
        throw new Error("Method not implemented.");
    }
    getAvailableExample(): number {
        throw new Error("Method not implemented.");
    }
}