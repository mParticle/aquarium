import { Operation } from "./Operation";

export class AuthorizationManager {
    private static authorizedOperations: Operation[] = [];
    
    public static isAuthorized(operation: Operation | Operation[]): boolean {
        if (Array.isArray(operation)) {
            return operation.every(op => this.authorizedOperations.includes(op));
        }
        else {
            return this.authorizedOperations.includes(operation);
        }
    }
}