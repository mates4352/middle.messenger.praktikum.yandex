import express from "express";

const app = express();
const PORT = 3000;
const __dirname = "./dist";

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});
