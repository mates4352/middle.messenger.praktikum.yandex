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

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".main__button");
  const pages = document.querySelectorAll(".main__list-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      pages.forEach((page) => {
        page.classList.remove("main__list-item--isShow");

        if (button.textContent === page.id) {
          page.classList.add("main__list-item--isShow");
        }
      });
    });
  });
});

const res = comp({
  page1: signIn(),

  page2: CreateAccount(),

  page3: Profile({
    content: ProfileData(),
  }),

  page4: Profile({
    content: ProfileDataChange(),
  }),

  page5: Profile({
    content: ProfileDataChangePassword(),
  }),

  page6: Chat(),

  page7: Error({
    error: "505",
    text: "Мы уже фиксим",
    href: "/",
  }),

  page8: Error({
    error: "404",
    text: "Не туда попали",
    href: "/",
  }),
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = res;
