import { test, expect } from '@playwright/test';
import { AbTestingOperations } from '../heroku-operations/abtesting_operations';
import { AbTestingOperationP } from '../heroku-playwright/abtesting';
import { equal } from 'assert';
const ab_page:AbTestingOperations=new AbTestingOperationP()

test("Heroku Title is OK", async () =>{

    const actualTitle = ab_page.getTitle();
    const expectedTitle = "The Internet"
    expect(actualTitle).toEqual(expectedTitle)

});

test("Heroku Header Text is OK",async()=>
{
    const actualHeader =ab_page.getHeader();
    const expectedHeader="A/B Test Control"
    expect(actualHeader).toEqual(expectedHeader)

});

test("Heoku Paragrpah Text is Ok",async()=>
{
    const actualParagraph  =ab_page.getParagraph();
    const expectedParagraph="Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through)."
    expect(actualParagraph).toEqual(expectedParagraph)
});

test("Heoku PoweredBy Selenium Link is Ok",async()=>
{
    const actualPoweredLink =ab_page.getPoweredBySeleniumLink();
    const expectedPoweredLink="http://elementalselenium.com/"
    expect(actualPoweredLink).toEqual(expectedPoweredLink)
});

test("Heoku Text Font is Ok",async()=>
{
    const actualTextFont =ab_page.getSize();
    const expectedTextFont="Arial"
    expect(actualTextFont).toEqual(expectedTextFont)     
});

test("Heoku Text Font Size is Ok",async()=>
{

    const actualFontSize =ab_page.getSize();
    const expectedFontSize="16px"
    expect(actualFontSize).toEqual(expectedFontSize)          
});


