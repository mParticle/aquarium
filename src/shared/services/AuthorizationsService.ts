import { Operation } from "../Operation";

export class AuthorizationsService {
    private static authorizedOperations: Operation[] = [];
    
    public static initialize(authorizedOperations: Operation[]): void {
        this.authorizedOperations = authorizedOperations;
    }
    
    public static isAuthorized(operation: Operation | Operation[]): boolean {
        if (Array.isArray(operation)) {
            return operation.every(op => this.authorizedOperations.includes(op));
        }
        else {
            return this.authorizedOperations.includes(operation);
        }
    }
}