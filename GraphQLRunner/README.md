## GraphQL Runner

The application is designed as a flexible GraphQL query runner for Hasura, allowing users to specify custom queries, endpoints, authentication tokens, and proxy settings via command-line arguments.

### Key functionality:

- Command-line argument parsing: Accepts parameters like `--URL_`, `--Token_`, `--Query_`, and `--Proxy_` to configure the execution
- GraphQL client: Connects to a Hasura GraphQL endpoint (defaults to `localhost:8080`)
- Query execution: Runs GraphQL queries against the Hasura API with authentication
- JSON export: Saves query results to timestamped JSON files in a data subdirectory
- Proxy support: Can route requests through a proxy server if specified

### Default behavior:

- Connects to `http://localhost:8080/v1/graphql`
- Executes a sample query selecting from `Anewschema_two` table
- Outputs results to `data/data_{timestamp}.json`

### Architecture:

- Uses dependency injection with `IHost` and services
- Implements `IHasuraQuery` interface for testability
- Supports configuration through `appsettings.json` files
- Uses `HttpClient` for making HTTP requests to the GraphQL endpoint
