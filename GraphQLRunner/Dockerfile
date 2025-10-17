#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base


ENV ASPNETCORE_ENVIRONMENT=Development

WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /GraphQLRunner
COPY ["GraphQLRunner.csproj", "GraphQLRunner.csproj"]
RUN dotnet restore "GraphQLRunner.csproj"

COPY . .
RUN dotnet build "GraphQLRunner.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GraphQLRunner.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GraphQLRunner.dll"]

COPY rootca.pem /usr/local/share/ca-certificates/chi-ansible.crt

RUN chmod 644 /usr/local/share/ca-certificates/*.crt && \
	update-ca-certificates