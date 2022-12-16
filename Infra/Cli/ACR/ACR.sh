#!/bin/bash

RESOURCE_GROUP: "RG_Rugby_Stats_V2"
LOCATION: "westeurope"
ACR_NAME: "acrrugbystatsv2"
ACR_SKUNAME: "Standard"

# Create Azure Container Registry
az acr create \
  --resource-group $RESOURCE_GROUP \
  --name $ACR_NAME \
  --sku $ACR_SKUNAME \
  --admin-enabled true