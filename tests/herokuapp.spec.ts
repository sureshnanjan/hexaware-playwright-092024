import { test, expect } from '@playwright/test';
import { HomePageOperations } from '../heroku-operations/home_page_operations';
import { HomePagePW } from '../heroku-playwright/homepage';
import { AddRemoveElements } from '../heroku-playwright/add-remove';
import { equal } from 'assert';
import { AddRemoveOperations } from '../heroku-operations/addremove_operations';
test("Heroku Title is OK", async () =>{
    const hm_page: HomePageOperations = new HomePagePW()
    const actual_title = hm_page.getTitle();
    const expectedResult = "Welcome To Internet"
    expect(actual_title).toEqual(expectedResult)

});
test("Heroku Subtitle is OK", async () =>{});
test("Heroku Available Examples is OK", async () =>{});

test("Adding 1 element works", async () =>{
    const adrPage:AddRemoveOperations =new AddRemoveElements()
    const expectedResult = 1
    adrPage.addElement();
    const actualResult = adrPage.getAddedElements();
    expect(actualResult).toEqual(expectedResult); 
});

test("Adding 10 elements works", async () =>{
    const adrPage:AddRemoveOperations=new AddRemoveElements()
    const expectedResult = 10
    adrPage.addElement();
    adrPage.addElement();
    adrPage.addElement();
    const actualResult = adrPage.getAddedElements();
    expect(actualResult).toEqual(expectedResult); 
});