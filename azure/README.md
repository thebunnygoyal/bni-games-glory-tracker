# Azure Deployment Guide for BNI Games Glory Tracker

## Prerequisites

1. Azure Account with active subscription
2. Azure CLI installed
3. Node.js 20.x installed
4. Git installed

## Deployment Steps

### 1. Login to Azure
```bash
az login
```

### 2. Create Resource Group
```bash
az group create --name rg-bni-games --location eastus
```

### 3. Deploy using Bicep template
```bash
az deployment group create \
  --resource-group rg-bni-games \
  --template-file azure/deploy.bicep \
  --parameters webAppName=bni-games-glory-tracker
```

### 4. Configure GitHub Secrets
Add these secrets to your GitHub repository:
- `AZURE_WEBAPP_PUBLISH_PROFILE`: Download from Azure Portal
- `VITE_API_URL`: Your API endpoint
- `VITE_AUTH_DOMAIN`: Your auth domain

### 5. Environment Variables
Configure these in Azure App Service:
```
VITE_ENVIRONMENT=production
VITE_API_URL=https://api.bni.com
VITE_AUTH_DOMAIN=bni.com
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true
```

## Manual Deployment

### Build locally
```bash
npm install
npm run build
```

### Deploy to Azure
```bash
az webapp deployment source config-zip \
  --resource-group rg-bni-games \
  --name bni-games-glory-tracker \
  --src dist.zip
```

## Custom Domain Setup

1. Add custom domain in Azure Portal
2. Configure DNS:
   - CNAME: www -> bni-games-glory-tracker.azurewebsites.net
   - A: @ -> Azure IP

3. Enable HTTPS:
```bash
az webapp config hostname add \
  --webapp-name bni-games-glory-tracker \
  --resource-group rg-bni-games \
  --hostname www.yourdomain.com
```

## Monitoring

### Enable Application Insights
```bash
az monitor app-insights component create \
  --app bni-games-insights \
  --location eastus \
  --resource-group rg-bni-games
```

### View Logs
```bash
az webapp log tail \
  --name bni-games-glory-tracker \
  --resource-group rg-bni-games
```

## Security Best Practices

1. Always use HTTPS
2. Keep secrets in Azure Key Vault
3. Enable Azure AD authentication
4. Configure IP restrictions
5. Regular security scans
6. Enable Web Application Firewall (WAF)

## Troubleshooting

### App not loading
- Check deployment logs
- Verify environment variables
- Check browser console for errors

### Authentication issues
- Verify auth domain configuration
- Check CORS settings
- Ensure cookies are enabled

### Performance issues
- Enable caching
- Use CDN for static assets
- Optimize images
- Enable compression