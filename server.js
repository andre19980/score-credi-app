const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post("/api/credito-analise", (req, res) => {
  const data = req.body;

  if (data.income > 15000) {
    return res.json({
      status: "APPROVED",
      max_amount: 10000,
    });
  }

  return res.json({
    status: "DENIED",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
