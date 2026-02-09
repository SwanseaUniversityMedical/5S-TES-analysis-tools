## SQLRunnerPostgres

The application is designed to be a flexible SQL-to-CSV exporter for PostgreSQL databases, allowing users to specify custom queries, output files, and connection strings via command-line arguments.

### Key functionality:

- Command-line argument parsing: Accepts parameters like `--Query`, `--Output`, `--Connection`, and `--Token_` to configure the execution
- Database connection: Uses `Npgsql` to connect to a PostgreSQL database with a default connection to localhost on port 5432
- Query execution: Runs the provided SQL query (defaults to selecting all records from the "profileForm" table)
- CSV export: Writes query results to a CSV file with column headers and data rows

### Default behavior:

- Connects to database "assets3" on localhost with admin credentials
- Executes SELECT \* FROM "profileForm"
- Outputs results to data.csv
- Uses a default token value of "default_token"
