import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { WEB_APP_PATH } from './config.js';

const app = express();
const PORT = 3000;

app.use(express.static(WEB_APP_PATH)); // <- Le chemin vers les pages web est maintenant géré par le fichier de configuration

// Proxy toutes les requêtes API
app.use('/api', createProxyMiddleware({
  target: 'https://api.la-rqm.dynv6.net',
  changeOrigin: true,
  pathRewrite: { '^/api': '/api' }
}));

app.listen(PORT, () => {
  console.log(`Dév serveur: http://localhost:${PORT}`);
});
