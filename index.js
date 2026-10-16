import express from "express"

const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

const productos = [
    {id: 1, nombre: "Producto 1", precio: 100},
    {id: 2, nombre: "Producto 2", precio: 200},
    {id: 3, nombre: "Producto 3", precio: 300}
]

app.get("/", (req, res) => {
    res.send("api del curso funcionando");
});

app.get("/api/productos", (req,res) => {
    res.json(productos);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})