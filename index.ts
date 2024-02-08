import "./src/assets/styles/styles.scss";
import tpl from "./index.hbs?raw";
import * as Handlebars from "handlebars";
import { CreateAccount, signIn } from "./src/components/pages";

const comp = Handlebars.compile(tpl);

const res = comp({
  page1: signIn(),
  page2: CreateAccount(),
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = res;
