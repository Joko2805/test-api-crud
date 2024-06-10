import { Router } from "express";
import { personRouter } from "./person/person.router";
import express from "express";

const routes = Router();

routes.use("/persons", personRouter);

export { routes };

// export class ApiRoutes {
//   static get() {
//     const router = Router();

//     router.use("/person", PersonRouter.get());

//     return router;
//   }
// }
