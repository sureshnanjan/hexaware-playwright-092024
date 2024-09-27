import { test, expect } from '@playwright/test';
import { HomePageOperations } from '../heroku-operations/home_page_operations';
import { HomePagePW } from '../heroku-playwright/homepage';
import { equal } from 'assert';
test("Heroku Title is OK", async () =>{
    const hm_page: HomePageOperations = new HomePagePW()
    const actual_title = hm_page.getTitle();
    const expectedResult = "Welcome To Internet"
    expect(actual_title).toEqual(expectedResult)

});
test("Heroku Subtitle is OK", async () =>{});
test("Heroku Available Examples is OK", async () =>{});