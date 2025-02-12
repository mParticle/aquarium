import { Operation } from "../Operation";

export class AuthorizationsService {
    public static isAuthorized(operation: Operation | Operation[]): boolean {
        if (Array.isArray(operation)) {
            return operation.every(op => window.mParticleConfig.operations.includes(op));
        }
        else {
            return window.mParticleConfig.operations.includes(operation);
        }
    }
}