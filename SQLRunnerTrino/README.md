## Tre-SQL-Trino

The application is designed as a flexible SQL-to-CSV exporter for Trino databases, allowing users to specify custom queries, output files, connection endpoints, and authentication tokens via command-line arguments.Key functionality:

### Key functionality:
- Command-line argument parsing: Accepts parameters like `--Query`, `--Output`, `--Connection`, and `--Token_` to configure the execution
- Trino database connection: Uses HTTP requests to connect to a Trino cluster via the `/v1/statement` endpoint
- Query execution: Sends SQL queries as JSON payloads to the Trino REST API
- CSV export: Processes the JSON response and writes query results to CSV files with column headers and data rows

### Default behavior:
- Connects to Trino at `http://localhost:8080/v1/statement`
- Executes `SELECT * FROM "profileForm"`
- Outputs results to `data.csv`

### Architecture:
- Uses `HttpClient` to make REST API calls to Trino
- Leverages `Newtonsoft.Json` for JSON processing
- Uses `CsvHelper` for CSV file generation
- Processes streaming JSON responses to handle large result sets efficiently
