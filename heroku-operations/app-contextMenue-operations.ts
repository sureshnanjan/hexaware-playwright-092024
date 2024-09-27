export interface IHerokuAppContextMenuOperations{

    hasPageDescription(): boolean;
    getPageDescription(): string;
    hasFunctionalInstruction(): boolean;
    getFunctionalInstruction(): string;
    hasClickArea(): boolean;
    rightClickDisplaysAlert(): boolean;
    getAlertMessage(): string;
    getAlertType(): string;
}