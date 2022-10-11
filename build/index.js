"use strict";
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const server = require("./server");
server.listen(PORT, () => {
    console.log("App running in the port: " + PORT);
});
