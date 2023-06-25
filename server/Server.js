const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.set("json spaces", 40);

// Définir une route
app.get("/api/hello", (req, res) => {
  // Mettez à jour l'URL ici
  res.json({ message: "Hello, API!" });
});

// Définir la gestion des erreurs pour les routes inconnues
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Gérer les autres erreurs
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Démarrer le serveur
app.listen(3001, () => {
  console.log("API server is running on port 3001");
});
