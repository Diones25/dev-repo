import { Router } from "express";
import auth from "./middlewares/auth.js";
import SessionController from "./controllers/SessionController.js";
import UserController from "./controllers/UserController.js";
import RepositoriesController from "./controllers/RepositoriesController.js";

const routes = new Router();

routes.post('/sessions', SessionController.create)

routes.use(auth);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.delete('/users/:user_id/repositories/:id', RepositoriesController.destroy);

export default routes;  