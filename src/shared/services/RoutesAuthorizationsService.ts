import { BaseRoutesAuthorizations } from "./routeAuthorizations/base-routes-authorizations";
import { Paths } from "../Paths";
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
    private routesAuthorizations: RouteAuthorization[] = [];

    constructor() {
        const suiteAuthorizations = [
            new Customer360Authorizations(),
            new DataPlatformAuthorizations(),
            new OversightAuthorizations(),
            new RootAuthorizations(),
            new SegmentationAuthorizations(),
        ] as BaseRoutesAuthorizations[];
        
        suiteAuthorizations.forEach((r) => this.registerRoutesAuthorizations(r.getRoutesAuthorizations()));
    }

    private registerRoutesAuthorizations(routesAuthorizations: RouteAuthorization[]) {
        this.routesAuthorizations.push(...routesAuthorizations);
    }

    public isRouteAuthorized(route: string): boolean {
        const authorizationConfig = this.routesAuthorizations.find((r) => this.routeMatches(route, r));

        return authorizationConfig?.authorized ?? false;
    }

    private routeMatches(route: string, routeAuthorization: RouteAuthorization): boolean {
        const suiteBaseRoute = Paths[routeAuthorization.suite].Root;
        const fullAuthorizedRoute = routeAuthorization.route
            ? `${suiteBaseRoute}/${routeAuthorization.route}`
            : suiteBaseRoute;

        return route.toLowerCase() === fullAuthorizedRoute.toLowerCase();
    }
}
