# 5S-TES-analysis-tools

A suite of containerized tools for flexible data extraction and analysis, designed to work with Hasura GraphQL, PostgreSQL, and Trino databases. Each tool is provided as a separate container and can be configured via command-line arguments for custom queries, endpoints, authentication, and output formats.

## Tools Overview

### 1. GraphQLRunner

- **Purpose:** Flexible GraphQL query runner for Hasura endpoints.
- [See GraphQLRunner/README.md for details](./GraphQLRunner/README.md)

### 2. SQLRunnerPostgres

- **Purpose:** SQL-to-CSV exporter for PostgreSQL databases.
- [See SQLRunnerPostgres/README.md for details](./SQLRunnerPostgres/README.md)

### 3. SQLRunnerTrino

- **Purpose:** SQL-to-CSV exporter for Trino databases.

- [See SQLRunnerTrino/README.md for details](./SQLRunnerTrino/README.md)

## Getting Started

Each tool is containerized and can be built and run independently. Refer to the individual tool's README for build, configuration, and usage instructions.
