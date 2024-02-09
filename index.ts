import "./src/assets/styles/styles.scss";
import tpl from "./index.hbs?raw";
import * as Handlebars from "handlebars";
import {
  CreateAccount,
  Error,
  Profile,
  ProfileData,
  signIn,
} from "./src/components/pages";

const comp = Handlebars.compile(tpl);

const res = comp({
  page1: signIn(),
  page2: CreateAccount(),
  page3: Error({
    error: "505",
    text: "Мы уже фиксим",
    href: "/",
  }),
  page4: Error({
    error: "404",
    text: "Не туда попали",
    href: "/",
  }),
  page5: Profile({
    content: ProfileData(),
  }),
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = res;
