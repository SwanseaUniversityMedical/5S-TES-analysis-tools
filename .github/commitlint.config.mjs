import { RuleConfigSeverity } from "@commitlint/types";

export default {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "scope-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "GraphQLRunner-container",
        "tre-sql-pg-container",
        "tre-sql-trino-container",
      ],
    ],
    "subject-case": [RuleConfigSeverity.Error, "never", []],
  },
};
