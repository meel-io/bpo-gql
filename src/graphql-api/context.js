const db = require("./utils/schema");
const { processUpload } = require("./utils/upload");

module.exports = req => {
  return {
    db,
    processUpload
  };
};
