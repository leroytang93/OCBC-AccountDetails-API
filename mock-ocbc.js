const express = require("express");
const app = express();

app.use(express.static("."));
app.use(express.json());

app.get("/transactional/currentAccount/1.0", async (req, res) => {
    res.redirect("https://8974d515-305d-4fcd-bab2-c0a0f8d79de1.mock.pstmn.io");
      var accountNo = req.param('accountNo');

      res.send(accountNo);
    });

  app.listen(3000, () => console.log('Node server listening on port 3000!'));