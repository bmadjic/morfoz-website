const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>La page d\'accueil est en construction.</h1>');
});

app.listen(port, () => {
  console.log(`L'application est en cours d'exécution sur http://localhost:${port}`);
});

