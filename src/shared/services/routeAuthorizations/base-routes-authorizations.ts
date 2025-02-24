import { Suite } from "../../Suite";
import { RouteAuthorization } from "../RoutesAuthorizationsService";

export abstract class BaseRoutesAuthorizations {
    protected abstract suite: Suite;
    protected abstract getAuthorizations(): Record<string, boolean>;

    public getRoutesAuthorizations(): RouteAuthorization[] {
        const routes = this.getAuthorizations();

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
