import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/meu_banco_de_dados", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexão com o MongoDB estabelecida com sucesso!");
  app.listen(PORT, () => {
    console.log(`Servidor tá na área em <http://localhost>:${PORT}`);
  });
}).catch(error => {
  console.error("Falha ao conectar com o MongoDB:", error);
});

app.use(express.json());
app.use("/api", taskRoutes);
