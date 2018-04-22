import express from "express";
import graphqlHttp from "express-graphql";
import schema from "./schema";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript";
import App from "../shared/App";
import carOfTheWeekSchema from "./schema/modelReviewsSchema";

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
app.get("*", async (req, res) => {
  const carOfTheWeekData = carOfTheWeekSchema.carOfTheWeek.resolve();
  const markup = renderToString(<App carOfTheWeek={carOfTheWeekData} />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Car Catalog</title>
        <script src='/bundle.js' defer></script>
        <script>window.__INITIAL_DATA__=${serialize(carOfTheWeekData)}</script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.info("listening...");
});
