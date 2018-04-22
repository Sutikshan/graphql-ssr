import express from "express";
import graphqlHttp from "express-graphql";
import schema from "./schema";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHttp({
    schema,
    graphiql: true
  })
);

app.use(express.static("public"));

app.get("*", function(req, res) {
  res.sendFile(path.resolve("public/index.html"));
});

app.listen(3000, () => {
  console.info("listening...");
});
