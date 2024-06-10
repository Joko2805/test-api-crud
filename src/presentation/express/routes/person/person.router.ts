import { Router } from "express";
import { PersonController } from "../../../http/controller/person/person.controller";

// export class PersonRouter {
//   static get() {
//     const router = Router();

//     router.get("/", (req, res) => {
//       const controller = new PersonController();
//       res.json(controller.getALl());
//     });

//     return router;
//   }
// }

const personRouter = Router();

const controller = new PersonController();

personRouter.get("/", (req, res) => {
  const httpResponse = controller.getALl();

  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

personRouter.get("/:id", (req, res) => {
  const id = +req.params.id;

  const httpResponse = controller.getById(id);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

personRouter.post("/", (req, res) => {
  const person = req.body;

  const httpResponse = controller.create(person);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

personRouter.put("/:id", (req, res) => {
  const person = req.body;
  const id = +req.params.id;

  const httpResponse = controller.update(id, person);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
});

personRouter.delete("/:id", (req, res) => {
  const id = +req.params.id;

  const httpResponse = controller.delete(id);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
})

export { personRouter };
