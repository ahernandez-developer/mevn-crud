const express = require("express");




async function main(){
    const app = express();
    app.use(require("../src/routes/web"));
    await app.listen(3000);
    console.log("server on http://localhost:3000");
}

main();