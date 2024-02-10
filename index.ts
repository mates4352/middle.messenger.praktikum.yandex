import "./src/assets/styles/styles.scss";
import tpl from "./index.hbs?raw";
import * as Handlebars from "handlebars";
import {
  Chat,
  CreateAccount,
  Error,
  Profile,
  ProfileData,
  ProfileDataChange,
  ProfileDataChangePassword,
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
  page6: Profile({
    content: ProfileDataChange(),
  }),
  page7: Profile({
    content: ProfileDataChangePassword(),
  }),
  page8: Chat(),
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = res;
