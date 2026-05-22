FROM --platform=${BUILDPLATFORM} mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["GraphQLRunner.csproj", "GraphQLRunner/"]
RUN dotnet restore "GraphQLRunner/GraphQLRunner.csproj"

COPY [".", "GraphQLRunner/"]
WORKDIR "/src/GraphQLRunner"
RUN dotnet publish "GraphQLRunner.csproj" \
    -c Release \
    -o /app/publish \
    --no-restore \
    --self-contained=false \
    /p:UseAppHost=false

FROM --platform=${TARGETPLATFORM} mcr.microsoft.com/dotnet/aspnet:7.0 AS final
USER root

# Install curl for healthchecks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

COPY rootca.pem /usr/local/share/ca-certificates/chi-ansible.crt
RUN chmod 644 /usr/local/share/ca-certificates/*.crt && \
	update-ca-certificates

USER app
EXPOSE 8080
EXPOSE 443
WORKDIR /app
COPY --chown=app:app --from=build /app/publish .
ENTRYPOINT ["dotnet", "GraphQLRunner.dll"]

