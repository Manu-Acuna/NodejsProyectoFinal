import express from "express";
import cors from "cors";
import productsrouter from "./src/routes/products-router.js";
import categoriasrouter from "./src/routes/categorias-router.js";

const app = express();

app.use(express.json());  // Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(cors());  // Middleware para permitir solicitudes desde cualquier origen

// Middleware para registrar las solicitudes entrantes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("api del curso funcionando");
});

app.use("/api/productos",productsrouter); 
app.use("/api/categorias",categoriasrouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});