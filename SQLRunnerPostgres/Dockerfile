FROM --platform=${BUILDPLATFORM} mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["SQLRunnerPostgres.csproj", "SQLRunnerPostgres/"]
RUN dotnet restore "SQLRunnerPostgres/SQLRunnerPostgres.csproj"

COPY [".", "SQLRunnerPostgres/"]
WORKDIR "/src/SQLRunnerPostgres"
RUN dotnet publish "SQLRunnerPostgres.csproj" \
    -c Release \
    -o /app/publish \
    --no-restore \
    --self-contained=false \
    /p:UseAppHost=false

FROM --platform=${TARGETPLATFORM} mcr.microsoft.com/dotnet/aspnet:7.0 AS final
USER app
WORKDIR /app
COPY --chown=app:app --from=build /app/publish .
ENTRYPOINT ["dotnet", "SQLRunnerPostgres.dll"]
