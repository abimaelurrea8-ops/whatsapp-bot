require('dns').setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const whatsappRoutes = require("./routes/whatsapp");

app.use(express.json());

// Rutas
app.use("/whatsapp", whatsappRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error en MongoDB:", err));

// Servidor
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});