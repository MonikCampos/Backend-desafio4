import express  from 'express';
import {Server} from 'socket.io';
import { engine } from 'express-handlebars';

import { router as productsRouter } from "./routes/productsRouter.js"
import { router as cartsRouter } from "./routes/cartsRouter.js";
import { router as viewsRouter } from "./routes/viewsRouter.js";
import __dirname from "./utils.js";



const port=8080;
const app=express();

//App.use para utilizar los routers
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname +  '/public')); //Para que se puedan ver las imagenes y estilos

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');


//rutas
//app.get( "/", (req, res) => {
//    return res.render("home");
//})

app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);


//el servidor escucha en el puerto 3000
const expressServer=app.listen(port, ()=>console.log(`Server corriendo en puerto ${port}`))
const socketServer = new Server(expressServer);

socketServer.on('connection', (socket)=>{   
    console.log("Se ha conectado un cliente");
});

/*<script  src="/socket.io/socket.io.js"></script>
<script src="/js/index.js"></script>*/