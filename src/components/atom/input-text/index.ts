import * as Handlebars from "handlebars";
import tpl from "tpl.hbs?raw";

Handlebars.registerPartial("InputText", tpl);

export const InputText = () => {
  return Handlebars.compile(tpl)({});
};