import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import { connectdb } from "./db/db.js";
import app from "./app.js";

connectdb()
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    }),
  )
  .catch((err) => {
    console.log(
      "SomeThing went wrong while connecting to database in the index",
      err,
    );
  });
