import { HomePageOperations } from "../heroku-operations/home_page_operations";
import { test, expect } from '@playwright/test';
export class HomePagePW implements HomePageOperations{
    // Locators
    getTitle(): string {
        // code here
        return "";
    }
    getSubTitle(): string {
        throw new Error("Method not implemented.");
    }
    getAvailableExample(): number {
        throw new Error("Method not implemented.");
    }
}