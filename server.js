const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');

const app = express();
const PORT = 3000;

app.use(express.static(config.webAppPath)); // <- Le chemin vers les pages web est maintenant géré par le fichier de configuration

// Proxy toutes les requêtes API
app.use('/api', createProxyMiddleware({
  target: 'https://api.la-rqm.dynv6.net',
  changeOrigin: true,
  pathRewrite: { '^/api': '/api' }
}));

app.listen(PORT, () => {
  console.log(`Dév serveur: http://localhost:${PORT}`);
});
