import { Suite } from "../Suite";
import { RouteAuthorization } from "../RoutesAuthorizationManager";

export abstract class BaseSuiteAuthorizations {
    protected abstract suite: Suite;
    protected abstract getRoutesAuthorizations(): Record<string, boolean>;

    public getRoutesAuthorizationsForSuite(): RouteAuthorization[] {
        const routes = this.getRoutesAuthorizations();

        const suiteRoutesAuthorizations = Object.keys(routes).map((route) => ({
            suite: this.suite,
            route,
            authorized: routes[route],
        }));

        // This is the authorization for the suite route itself
        const suiteRouteAuthorization = {
            suite: this.suite,
            route: "",
            authorized: suiteRoutesAuthorizations.some((r) => r.authorized),
        };

        return [suiteRouteAuthorization, ...suiteRoutesAuthorizations];
    }
}
