const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/bfhl", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
