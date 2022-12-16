#!/bin/bash

RESOURCE_GROUP: "RG_Rugby_Stats_V2"
LOCATION: "westeurope"
POSTGRESQL_NAME: "rugbystatsv2"
POSTGRESQL_ADMINUSER: "adminDB"
POSTGRESQL_ADMINPASSWORD: "Password123$"
POSTGRESQL_SKUNAME: "Standard_B1ms"
POSTGRESQL_TIER: "Burstable"
POSTGRESQL_VERSION: "14"
POSTGRESQL_STORAGESIZE: "32"
POSTGRESQL_DBNAME: "rugby_api"

# Create a resource group.
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION

# Create a logical server in the resource group.
az postgres flexible-server create \
  --name $POSTGRESQL_NAME \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --admin-user $POSTGRESQL_ADMINUSER \
  --admin-password $POSTGRESQL_ADMINPASSWORD \
  --sku-name $POSTGRESQL_SKUNAME \
  --tier $POSTGRESQL_TIER \
  --version $POSTGRESQL_VERSION \
  --storage-size $POSTGRESQL_STORAGESIZE \
  --public-access 0.0.0.0 --yes

# Firewall rule to allow access from internet
az postgres flexible-server firewall-rule create \
  --name $POSTGRESQL_NAME \
  --resource-group $RESOURCE_GROUP \
  --rule-name allowall \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 255.255.255.255

# Allow non-SSL connections
az postgres flexible-server parameter set \
  --resource-group $RESOURCE_GROUP \
  --server-name $POSTGRESQL_NAME \
  --name require_secure_transport --value off

# Create Database
az postgres flexible-server db create \
  --resource-group $RESOURCE_GROUP \
  --server-name $POSTGRESQL_NAME \
  --database-name $POSTGRESQL_DBNAME

# create table sum_plaquage_ok int
az postgres flexible-server execute \
  --admin-password $POSTGRESQL_ADMINPASSWORD \
  --admin-user $POSTGRESQL_ADMINUSER \
  --name $POSTGRESQL_NAME \
  --database-name $POSTGRESQL_DBNAME \
  --file-path create_tables.sql
