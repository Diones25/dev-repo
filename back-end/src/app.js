import express, { Router } from 'express';
import cors from 'cors';
import routes from './routes.js';
import conn from './db/conn.js';

class App {
  constructor() {
    this.server = express();
    this.middleares();
    this.routes();
  } 

  middleares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
} 

export default new App().server;