const fetch = require("node-fetch");
const fs = require("fs");

fetch(
  `${process.env.VUE_APP_GRAPHQL_ENDPOINT || "http://localhost:4000"}/graphql`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
    })
  }
)
  .then(result => result.json())
  .then(result => {
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    );
    result.data.__schema.types = filteredData;
    fs.writeFile(
      "./live/fragmentTypes.json",
      JSON.stringify(result.data),
      err => {
        if (err) console.error("Error writing fragmentTypes file", err);
        console.log("Fragment types successfully extracted!");
      }
    );
  });
