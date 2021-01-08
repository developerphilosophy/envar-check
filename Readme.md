# Environment Variable Check

A small library to check if environment variable or variables are set or not. This is limited to Node process as the library checks for environment variables set on _process.env_ object available in a node process. Very light weight library with simple implementation.

## Import:

Import the environment variable check function and the Severity enum. By default the severity is set to **Fatal**.

```ts
import { envCheck, Severity } from "envar-check";
```

```js
const { envCheck, Severity } = require("envar-check");
```

## Usage:

Funtion signature:

```ts
envCheck( envVars: string | string[], sev: Severity = Severity.FATAL): boolean
```

### Arguments:

Function requires two argument the first being a single environment variable name or an array of environment variable names.

The second argument to the function is option as it defaults to **FATAL** is no severity is provided. There are three severities availble i.e **DEBUG**, **WARN**, and **FATAL**. Please note if **FATAL** severity is selected the process will exit with an status code of 1. This is to make sure that if the required environment variables are not set we don't proceed with runing our server or node process.

### Return values:

If _envCheck_ is called with severity of **DEBUG** or **WARN**. If environment variables are set it return true and if not set then returns false. For **FATAL** severity the function returns nothing as process exists, so return something is counter intuitive.

```ts
envCheck("PORT", Severity.DEBUG);
envCheck("PORT", Severity.WARN);
envCheck("PORT", Severity.FATAL);

/**
 * Pass environment variable name array to check multiple
 * environment variables
 */
envCheck(["PORT", "DATABASE_URL", "API_KEY"], Severity.WARN);
```
