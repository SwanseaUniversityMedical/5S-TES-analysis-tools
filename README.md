# 5S-TES-analysis-tools

A suite of containerized tools for flexible data extraction and analysis, designed to work with Hasura GraphQL, PostgreSQL, and Trino databases. Each tool is provided as a separate container and can be configured via command-line arguments for custom queries, endpoints, authentication, and output formats.

## Tools Overview

### 1. Tre-Hasura
- **Purpose:** Flexible GraphQL query runner for Hasura endpoints.
- [See Tre-Hasura/README.md for details](./Tre-Hasura/README.md)

### 2. Tre-SQL-PG
- **Purpose:** SQL-to-CSV exporter for PostgreSQL databases.
- [See Tre-SQL-PG/README.md for details](./Tre-SQL-PG/README.md)

### 3. Tre-SQL-Trino
- **Purpose:** SQL-to-CSV exporter for Trino databases.

- [See Tre-SQL-Trino/README.md for details](./Tre-SQL-Trino/README.md)

## Getting Started

Each tool is containerized and can be built and run independently. Refer to the individual tool's README for build, configuration, and usage instructions.

