import express from 'express';
import { routes } from '../routes/routes';
import { personRouter } from '../routes/person/person.router';
// import { ApiRoutes } from '../routes/router';

export const app = express();

app.use(express.json())

// app.use(ApiRoutes.get())
app.use("/persons", personRouter)

