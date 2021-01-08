import chalk from "chalk";

function envCheck(
  envVars: string | string[],
  sev: Severity = Severity.FATAL
): boolean {
  const notSets = [];
  if (Array.isArray(envVars)) {
    for (const env of envVars) {
      if (!process.env[env]) {
        notSets.push(env);
      }
    }
  } else {
    if (!process.env[envVars]) {
      notSets.push(envVars);
    }
  }

  if (notSets.length > 0) {
    let envMessage;
    notSets.length === 1
      ? (envMessage = "Environment variable")
      : (envMessage = "Environment variables");

    switch (sev) {
      case Severity.DEBUG:
        console.log(
          `${chalk.green(
            `${sev}: ${envMessage} ${chalk.white(notSets)} not set`
          )}`
        );
        return false;
      case Severity.WARN:
        console.log(
          `${chalk.yellow(
            `${sev}: ${envMessage} ${chalk.white(notSets)} not set`
          )}`
        );
        return false;
      default:
        console.log(
          chalk.red(`${sev}: ${envMessage} ${chalk.white(notSets)} not set!`)
        );
        process.exit(1);
    }
  }
  return true;
}

const enum Severity {
  FATAL = "FATAL",
  WARN = "WARN",
  DEBUG = "DEBUG",
}

export { envCheck, Severity };
