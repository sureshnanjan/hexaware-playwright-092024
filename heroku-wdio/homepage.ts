import { HomePageOperations } from "../heroku-operations/home_page_operations";

class HomePageWDIO implements HomePageOperations{
    getTitle(): string {
        throw new Error("Method not implemented.");
    }
    getSubTitle(): string {
        throw new Error("Method not implemented.");
    }
    getAvailableExample(): number {
        throw new Error("Method not implemented.");
    }
}