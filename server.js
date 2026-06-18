import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// cPanel / Passenger provides the port via the PORT env var.
const port = process.env.PORT || 3000;

const app = express();

// Serve the pre-built Vite assets with long-lived caching for hashed files.
app.use(
  express.static(distDir, {
    maxAge: '1y',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  })
);

// SPA fallback: let client-side routing handle any unmatched route.
app.use((req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`invest_website server listening on port ${port}`);
});
