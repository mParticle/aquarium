import { BaseRoutesAuthorizations } from "./routeAuthorizations/base-routes-authorizations";
import { Suite } from "../Suite";
import { Customer360Authorizations } from "./routeAuthorizations/customer-360-authorizations";
import { DataPlatformAuthorizations } from "./routeAuthorizations/data-platform-authorizations";
import { OversightAuthorizations } from "./routeAuthorizations/oversight-authorizations";
import { RootAuthorizations } from "./routeAuthorizations/root-authorizations";
import { SegmentationAuthorizations } from "./routeAuthorizations/segmentation-authorizations";

export type RouteAuthorization = {
    suite: Suite;
    route: string;
    authorized: boolean;
};

export class RoutesAuthorizationsService {
    private static routesAuthorizations: RouteAuthorization[];
    
    static initialize() {
        const suiteAuthorizations = [
            new Customer360Authorizations(),
            new DataPlatformAuthorizations(),
            new OversightAuthorizations(),
            new RootAuthorizations(),
            new SegmentationAuthorizations(),
        ] as BaseRoutesAuthorizations[];

        this.routesAuthorizations = suiteAuthorizations.flatMap((r) => r.getRoutesAuthorizations());
    }
    
    public static isRouteAuthorized(route: string): boolean {
        const authorizationConfig = this.routesAuthorizations.find((r) => this.routeMatches(route, r));

        return authorizationConfig?.authorized ?? false;
    }

    private static routeMatches(route: string, routeAuthorization: RouteAuthorization): boolean {
        return route.toLowerCase() === routeAuthorization.route.toLowerCase();
    }
}
