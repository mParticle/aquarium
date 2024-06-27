# User Preferences Service

The `UserPreferencesService` class is a TypeScript module designed to manage user preferences within an application. It leverages a composite pattern to handle preferences across different scopes and integrates with browser cookies for persistence.

## Features

- **Initialization of Preferences**: Loads and initializes user preferences from storage (currently uses cookies).
- **Opt-in Check**: Allows checking if a user has opted into a specific preference.
- **Set Preference**: Enables setting a user's preference, including opt-in/opt-out functionality.
- **Scoped Preferences**: Supports handling preferences within defined scopes to cater to different user segments or application areas.
- **Update Callbacks**: Provides an optional callback mechanism to react to changes in preferences. When preferences are successfully loaded or updated, the `onUpdate` callback is invoked with the resolved preferences as its argument. This allows for reactive updates in the application UI or logic based on the current user preferences.

## Dependencies

This module relies on several custom utilities and services, including:

- `UserPreferences` and `CompositeUserPreferences` for modeling user preferences.
- `UserPreferenceScope` and `UserPreferenceDefinitions` for defining the scope and structure of preferences.
- `CompositeUserPreferencesService` for handling the composite nature of user preferences.
- `Cookies` utility for getting and setting preferences in browser cookies.

## Usage

To use the `UserPreferencesService`, you need to instantiate it with the necessary dependencies, including preference definitions, a composite service instance, the current scope, and cookie options. After instantiation, call the `init` method to load existing preferences.

### Example

```typescript
import { UserPreferencesService } from './user-preferences.ts'
import { UserPreferenceDefinitions } from 'src/services/user-preferences/models/definitions/user-preference-definitions'
import { CompositeUserPreferencesService } from 'src/services/user-preferences/composite-user-preferences-service'
import { UserPreferenceScope } from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { CookieOptions } from 'src/utils/Cookies'

// Define your preferences, scope, and cookie options
const definitions = new UserPreferenceDefinitions(/* ... */)
const compositeService = new CompositeUserPreferencesService(/* ... */)
const scope = UserPreferenceScope.Global
const cookieOptions: CookieOptions = { key: 'user_prefs', path: '/', secure: true }

// Instantiate the service
const userPreferencesService = new UserPreferencesService(
  definitions,
  compositeService,
  scope,
  cookieOptions,
  resolvedPreferences => {
    console.log('Preferences updated:', resolvedPreferences)
    // Implement your update logic here, e.g., update UI or application state
  },
)

// Initialize preferences
userPreferencesService.init().then(() => {
  console.log('User preferences initialized.')
})
```

#### Note

This module is designed to be flexible and extensible to accommodate various types of user preferences and application requirements. It is essential to provide the correct dependencies and configurations for it to function correctly.
