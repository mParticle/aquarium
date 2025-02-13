import * as Cookies from 'src/utils/Cookies'
import { initializeUserPreferences } from "../UserPreferences";
import { RoutesAuthorizationsService } from "./RoutesAuthorizationsService";
import { NavigationItemsService } from "./NavigationItemsService";

export class InitializationService {
    static async loadMParticleConfig(baseUrl: string = ""): Promise<void> {
        if(window.mParticleConfig)
            return;
        
        const userSessionResponse = await fetch(`${baseUrl}/api/user/session`, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-requested-by": Cookies.get("x-csrf") ?? ""
            },
            method: "GET",
            credentials: "same-origin"
        });

        window.mParticleConfig = await userSessionResponse.json() as mParticleConfig;
    }
    
    static async initialize(baseUrl: string = ""): Promise<void> {
        await this.loadMParticleConfig(baseUrl);
        
        await initializeUserPreferences();
        RoutesAuthorizationsService.initialize();
        NavigationItemsService.initialize();
    }
}