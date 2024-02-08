import express from "express";

const app = express();
const PORT = 4200;
const __dirname = "./dist";

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});
