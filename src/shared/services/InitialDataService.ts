import * as Cookies from 'src/utils/Cookies'

export class InitialDataService {
    static async loadMParticleConfig(baseUrl?: string): Promise<void> {
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
}