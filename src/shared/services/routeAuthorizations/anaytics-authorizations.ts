import { BaseRoutesAuthorizations } from "./base-routes-authorizations";
import { Suite } from "../../Suite";
import { Paths } from "../../Paths";

export class AnalyticsAuthorizations extends BaseRoutesAuthorizations {
    protected suite: Suite = Suite.Segmentation;

    protected getAuthorizations(): Record<string, boolean> {
        return {
            [Paths.Analytics.Data]: true,
            [Paths.Analytics.Saved]: true,
            [Paths.Analytics.MyHub]: true,
            [Paths.Analytics.Favorites]: true,
        };
    }
}
