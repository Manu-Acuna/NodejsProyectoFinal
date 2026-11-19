import {Router} from 'express';

const router = Router();

const categoria = [
    {id:1, nombre: "stickers"},
    {id:2, nombre: "agendas"},
    {id:3, nombre: "fotoimanes"}
]

router.get("/api/categorias", (req,res) => {
    res.json(categoria)
})

export default router;