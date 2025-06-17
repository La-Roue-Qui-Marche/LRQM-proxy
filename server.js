const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;


app.use(express.static('../LRQM-web')); // <- Il faut remplacer ici le chemin avec le path vers les pages web

// Proxy toutes les requêtes API
app.use('/api', createProxyMiddleware({
  target: 'https://api.la-rqm.dynv6.net',
  changeOrigin: true,
  pathRewrite: { '^/api': '/api' }
}));

app.listen(PORT, () => {
  console.log(`Dév serveur: http://localhost:${PORT}`);
});
