const appInsights = require("applicationinsights");
appInsights
  .setup(
    "InstrumentationKey=0327db97-cfb4-4c34-8093-89432a5238bb;IngestionEndpoint=https://centralindia-0.in.applicationinsights.azure.com/;LiveEndpoint=https://centralindia.livediagnostics.monitor.azure.com/;ApplicationId=267e4fa8-6756-4bde-8bff-1d1638f85a84"
  )
  .start();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js with Application Insights!");
});

app.get("/error", (req, res) => {
  throw new Error("Test error!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
