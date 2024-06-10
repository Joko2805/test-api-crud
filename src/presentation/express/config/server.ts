import { envs } from "../../../configs/plugins/env.plugin";
import { app } from "./app";

app.listen(envs.PORT, () => {
  console.log("Server Started...");
});
