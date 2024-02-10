import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("Error", tpl);

type ErrorType = {
  error: string;
  text: string;
  href: string;
};

export const Error = ({ error, text }: ErrorType) => {
  return Handlebars.compile(tpl)({ error, text });
};
