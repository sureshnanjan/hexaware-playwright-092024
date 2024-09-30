import { AddRemoveOperations } from "../heroku-operations/addremove_operations";

export class AddRemoveElements implements AddRemoveOperations{
    getTitle(): string {
        throw new Error("Method not implemented.");
    }
    addElement(): void {
        throw new Error("Method not implemented.");
    }
    getAddedElements(): string[] {
        throw new Error("Method not implemented.");
    }
    deleteElement(): void {
        throw new Error("Method not implemented.");
    }
}