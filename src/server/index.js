const express = require('express');
const graphqlHttp = require('express-graphql');
const schema = require('./schema');
const cors = require("cors");
const { renderToString }  = require("react-dom/server");
const App = require('../shared/App.jsx'); //eslint-disable-line

const app = express();
app.use(cors())
app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true,
}));
app.use(express.static("public"))

app.get("*", (req, res) => {
  const markup = renderToString(
    <App />
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src='/bundle.js'></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
});

app.listen(4000, () => {
  console.info('listening...');
});
