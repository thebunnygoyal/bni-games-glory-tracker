param webAppName string = 'bni-games-glory-tracker'
param location string = resourceGroup().location
param sku string = 'F1' // Free tier
param linuxFxVersion string = 'NODE|20-lts'

resource appServicePlan 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: '${webAppName}-plan'
  location: location
  sku: {
    name: sku
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}

resource webApp 'Microsoft.Web/sites@2022-03-01' = {
  name: webAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: linuxFxVersion
      appSettings: [
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~20'
        }
        {
          name: 'SCM_DO_BUILD_DURING_DEPLOYMENT'
          value: 'true'
        }
        {
          name: 'VITE_ENVIRONMENT'
          value: 'production'
        }
        {
          name: 'VITE_API_URL'
          value: 'https://api.bni.com'
        }
        {
          name: 'VITE_AUTH_DOMAIN'
          value: 'bni.com'
        }
        {
          name: 'VITE_ENABLE_ANALYTICS'
          value: 'true'
        }
        {
          name: 'VITE_ENABLE_ERROR_REPORTING'
          value: 'true'
        }
      ]
      ftpsState: 'Disabled'
      minTlsVersion: '1.2'
      http20Enabled: true
      webSocketsEnabled: false
      alwaysOn: false
      cors: {
        allowedOrigins: [
          'https://bni.com'
          'https://*.bni.com'
        ]
        supportCredentials: true
      }
    }
    httpsOnly: true
  }
}

resource webAppConfig 'Microsoft.Web/sites/config@2022-03-01' = {
  parent: webApp
  name: 'web'
  properties: {
    nodeVersion: '~20'
    appCommandLine: 'pm2 serve dist --no-daemon --spa'
  }
}

output webAppUrl string = 'https://${webApp.properties.defaultHostName}'
output webAppName string = webApp.name