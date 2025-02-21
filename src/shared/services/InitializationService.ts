import { initializeUserPreferences } from "../UserPreferences";
import { RoutesAuthorizationsService } from "./RoutesAuthorizationsService";
import { NavigationItemsService } from "./NavigationItemsService";
import { FeatureFlag, FeatureFlagsService } from "src/shared/services/FeatureFlagsService";
import { AuthorizationsService } from "src/shared/services/AuthorizationsService";

export class InitializationService {
    static async loadMParticleConfig(baseUrl: string = ""): Promise<void> {
        if(window.mParticleConfig)
            return;
        
        const userSessionResponse = await fetch(`${baseUrl}/api/user/session`, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            method: "GET",
            credentials: "include"
        });

        window.mParticleConfig = await userSessionResponse.json() as mParticleConfig;
    }
    
    static async initialize(baseUrl: string = ""): Promise<void> {
        await this.loadMParticleConfig(baseUrl);
        
        FeatureFlagsService.initialize(window.mParticleConfig.workspaceFeatureSettings.map(f => f.name as FeatureFlag));
        AuthorizationsService.initialize(window.mParticleConfig.operations);
        
        await initializeUserPreferences();
        RoutesAuthorizationsService.initialize();
        NavigationItemsService.initialize();
    }
}