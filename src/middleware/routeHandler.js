import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";

const db = new Database()

export function routeHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path === req.url
    })

    if(route){
        return route.controller({req, res, db})
     }

     return res.writeHead(404).end("not found")
}