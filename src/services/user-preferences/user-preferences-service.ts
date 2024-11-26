import { UserPreferenceScopeType } from "src/services/user-preferences/models/definitions";
import { USER_PREFERENCE_SCOPE_SEPARATOR, UserPreferenceGlobalScope, UserPreferenceScope } from "src/services/user-preferences/models/storage-models";
import * as Cookies from "src/utils/Cookies";
import { CookieOptions } from "src/utils/Cookies";
import cloneDeep from "lodash/cloneDeep";

export type UserPreferenceDefinition<T> = {
    allowedScope: UserPreferenceScopeType,
    defaultValue: T,
}

export type UserPreferenceDefinitions<T> = { 
    [P in keyof T]: UserPreferenceDefinition<T[P]> 
}

export type UserPreferencesPerScope<T> = {
    [K in UserPreferenceScope]?: T
}

export class UserPreferencesService<T> {
    private preferences!: T; 
    private readonly compositeUserPreferencesService: CompositeUserPreferencesService<T>;
    constructor(
        private readonly definitions: UserPreferenceDefinitions<T>,
        private readonly currentScope: UserPreferenceScope,
        private readonly cookieOptions: CookieOptions & { key: string },
        private readonly onUpdate?: (resolvedPreferences: T) => void,
    ) {
        this.compositeUserPreferencesService = new CompositeUserPreferencesService<T>();
    }

    public async getPreference<TKey extends keyof T, TValue extends T[TKey]>(key: TKey): Promise<TValue> {
        const userPreference = this.preferences[key]

        if (!userPreference) 
            await Promise.reject(new Error(`Invalid Operation. A user preference could not be found.`))

        return userPreference as TValue;
    }
    
    public async setPreference<TKey extends keyof T, TValue extends T[TKey]>(key: TKey, value: TValue): Promise<void> {
        const currentStoredPreferences = await this.getStoredPreferences();

        const storedPreferences = this.compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
            key,
            value,
            this.currentScope,
            currentStoredPreferences,
            this.definitions[key].allowedScope,
        )

        await this.setStoredPreferences(storedPreferences)

        this.preferences = this.compositeUserPreferencesService.getScopedUserPreferences(
            storedPreferences,
            this.currentScope,
            this.definitions,
        )

        this.onUpdate?.(this.preferences)
    }

    public async init(): Promise<void> {
        const storedPreferences = await this.getStoredPreferences()
        this.preferences = this.compositeUserPreferencesService.getScopedUserPreferences(
            storedPreferences,
            this.currentScope,
            this.definitions,
        )
        
        this.onUpdate?.(this.preferences)
    }

    private async getStoredPreferences(): Promise<UserPreferencesPerScope<T>> {
        return await Promise.resolve(Cookies.getObject(this.cookieOptions.key) ?? {})
    }

    private async setStoredPreferences(storedPreferences: UserPreferencesPerScope<T>): Promise<void> {
        Cookies.putObject(this.cookieOptions.key, storedPreferences, this.cookieOptions)

        await Promise.resolve()
    }
}



export class CompositeUserPreferencesService<T> {
    public getScopedUserPreferences(
        userPreferencesPerScope: UserPreferencesPerScope<T>,
        currentScope: UserPreferenceScope,
        definitions: UserPreferenceDefinitions<T>,
    ): T {
        const entriesByIdAndUserPreference = Object.entries(definitions).map(([key, definition]) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            this.createUserPreferenceEntryFromDefinition(userPreferencesPerScope, currentScope, key, definition),
        )

        const composite = {} as T;
        
        for (const [key, value] of entriesByIdAndUserPreference) {
            composite[key] = value
        }
        
        return composite
    }

    public getUpdatedUserPreferenceStorageObject<TKey extends keyof T>(
        userPreferenceKey: TKey,
        value: T[TKey],
        currentScope: UserPreferenceScope,
        currentPreferences: UserPreferencesPerScope<T>,
        allowedScope: UserPreferenceScopeType,
    ): UserPreferencesPerScope<T> {
        const userPreferencesToUpdate = currentPreferences ? cloneDeep(currentPreferences) : {} as UserPreferencesPerScope<T>

        const effectiveScope = this.getEffectiveScope(currentScope, allowedScope)

        const scopedUserPreferences = userPreferencesToUpdate[effectiveScope] ?? {} as T

        scopedUserPreferences[userPreferenceKey] = value

        userPreferencesToUpdate[effectiveScope] = scopedUserPreferences

        return userPreferencesToUpdate
    }
    
    private createUserPreferenceEntryFromDefinition<TKey extends keyof T, TValue extends T[TKey]>(
        userPreferencesPerScope: UserPreferencesPerScope<T>,
        currentScope: UserPreferenceScope,
        userPreferenceKey: TKey,
        definition: UserPreferenceDefinition<TValue>,
    ): [TKey, TValue] {
        if (!userPreferencesPerScope) {
            return [userPreferenceKey, definition.defaultValue]
        }

        const effectiveScope = this.getEffectiveScope(currentScope, definition.allowedScope)

        const scopedUserPreferences = userPreferencesPerScope[effectiveScope]

        const valueForCurrentScope = scopedUserPreferences?.[userPreferenceKey]

        const value = valueForCurrentScope ?? definition.defaultValue

        return [userPreferenceKey, value as TValue];
    }

    private getEffectiveScope(
        currentScope: UserPreferenceScope,
        allowedScope: UserPreferenceScopeType,
    ): UserPreferenceScope {
        if (allowedScope === null) throw new Error('ArgumentError | An allowed scope must be provided.')

        if (allowedScope === UserPreferenceScopeType.Global) return UserPreferenceGlobalScope

        let scopeLength = 0
        switch (allowedScope) {
            case UserPreferenceScopeType.LevelOneScope:
                scopeLength = 1
                break
            case UserPreferenceScopeType.LevelTwoScope:
                scopeLength = 2
                break
            case UserPreferenceScopeType.LevelThreeScope:
                scopeLength = 3
                break
            default:
                throw new Error('ArgumentError | An invalid allowed scope was provided.')
        }

        const currenScopeParts = currentScope.split(USER_PREFERENCE_SCOPE_SEPARATOR)

        currenScopeParts.length = scopeLength // Truncating scope parts that are too granular for the allowed scope

        return currenScopeParts.join(USER_PREFERENCE_SCOPE_SEPARATOR) as UserPreferenceScope
    }
}