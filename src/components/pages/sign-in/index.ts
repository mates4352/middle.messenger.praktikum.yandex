import * as Handlebars from "handlebars";
import tpl from "./tpl.hbs?raw";

Handlebars.registerPartial("signIn", tpl);

export const signIn = () => {
  return Handlebars.compile(tpl)({});
};
