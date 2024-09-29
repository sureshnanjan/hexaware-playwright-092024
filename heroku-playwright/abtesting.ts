import { AbTestingOperations } from "../heroku-operations/abtesting_operations";

export class AbTestingOperationP implements AbTestingOperations
{
    getTitle(): string {
        throw new Error("Method not implemented.");
    }
    
    getParagraph(): string {
        throw new Error("Method not implemented.");
    }
    getPoweredBySeleniumLink(): string {
        throw new Error("Method not implemented.");
    }
    getHeader(): string {
        throw new Error("Method not implemented.");
    }
    getHeaderFont(): string {
        throw new Error("Method not implemented.");
    }
    getSize(): BigInteger {
        throw new Error("Method not implemented.");
    }
    
}