import { IHerokuAppContextMenuOperations } from "../heroku-operations/app-contextMenue-operations";
import { IHerokuAppSubPages } from "../heroku-operations/app-subpages-operations";

export class ContextMenuOperationPlaywright implements IHerokuAppContextMenuOperations, IHerokuAppSubPages{

    hasTitle(): boolean {
        //playwright logic to check whether the selected page has title or not.

        return true;
    }

    getTitle(): string {
        //playwright logic to locate title element and get the text content from it.

        return "";
    }

    hasFooter(): boolean {
        // playwright logic to check whether the page has a footer displayed in it.

        return true;
    }

    getFootertText(): string {
        //Playwright logic to check for footer text and get its text content

        return "";
    }

    hasElementalSeliniumHyperlink(): boolean {
        // Playwright logic to locate and check the Elemental Selenium footer link.

        return true;
    }

    getFooterHyperlingText(): string {
        // Playwright code to locate and fetch the footer hyperlink text.

        return "";
    }

    hasPageDescription(): boolean {
        // Playwright code to locate the context manu page description.

        return true;
    }

    getPageDescription(): string {
        // Playwright code to locate and get the text content

        return "";
    }

    hasFunctionalInstruction(): boolean {
        // code to locate the instructions displayed on the page

        return true;
    }

    getFunctionalInstruction(): string {
        // code to locate and fetch the displayed functional instruction text content

        return "";
    }
    
    hasClickArea(): boolean {
        // code to check the availability of the context click area on the page.

        return true;
    }
    
    rightClickDisplaysAlert(): boolean {
        // Code to check whether the website displays an alert window when user performs context click or right click.

        return true;
    }
    
    getAlertMessage(): string {
        // code here to get the displayed allert message from displayed alert window.

        return "";
    }

    getAlertType(): string {
        // method to fetch the displayed alert type.

        return "";
    }

    
}