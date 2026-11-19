const productos = [
    {
        id:1,
        nombre: "Sticker holo Boca",
        precio: 1000,
        stock: 10,
        categoriaId: 1
    },
    {
        id:2,
        nombre: "Sticker holo River",
        precio: 1000,
        stock: 10,
        categoriaId: 1
    },
    {
        id:3,
        nombre: "Agenda Boca 2027",
        precio: 20000,
        stock: 5,
        categoriaId: 2
    },
    {
        id:4,
        nombre: "Agenda River 2027",
        precio: 20000,
        stock: 4,
        categoriaId: 2
    },
    {
        id:5,
        nombre: "fotoiman Boca Jrs",
        precio: 2500,
        stock:20,
        categoriaId: 3
    }
];

export const getProducts = (req,res) => {
    const categoriaId = req.query.categoriaId;
    if(!categoriaId){
        res.json(productos);
        return;
    } else {
        const productosFiltrados = productos.filter(p => p.categoriaId === parseInt(categoriaId));
        res.json(productosFiltrados);
    }
};

export const getProductById = (req, res) => {
    const {id} = req.params;
    const producto = productos.find(p => p.id === parseInt(id));
    producto ? res.json(producto) : res.status(404).json({error: "Producto no encontrado"});
};

export const createProduct = (req, res) => {
    const {nombre, precio, stock, categoriaId} = req.body;

    if(!nombre || !precio || !stock || !categoriaId) {
        return res.status(422).json({error: "Faltan datos del producto"});
    }

    const nuevoProducto = {
        id: productos.length + 1,
        nombre,
        precio,
        stock,
        categoriaId
    };
    
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
};

export const deleteProduct = (req, res) => {
    const {id} = req.params;
    const index = productos.findIndex(p => p.id === parseInt(id));
    index !== -1 ? (productos.splice(index, 1), res.json({message: "Producto eliminado"})) : res.status(404).json({error: "Producto no encontrado"});
}