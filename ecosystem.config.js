module.exports = {
  apps: [{
    name: 'bni-games-glory-tracker',
    script: 'serve',
    env: {
      PM2_SERVE_PATH: 'dist',
      PM2_SERVE_PORT: process.env.PORT || 8080,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: '/index.html',
      NODE_ENV: 'production'
    },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_file: 'logs/combined.log',
    time: true
  }]
}