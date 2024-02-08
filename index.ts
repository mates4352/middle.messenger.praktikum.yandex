import "./src/assets/styles/styles.scss";
import tpl from "./index.hbs?raw";
import * as Handlebars from "handlebars";
import { signIn } from "./src/components/pages";

const comp = Handlebars.compile(tpl);

const res = comp({
  frame: "hello",
  page1: signIn(),
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = res;
