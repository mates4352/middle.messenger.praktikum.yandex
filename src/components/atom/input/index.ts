import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("input", tpl);

type InputType = {
  type: string;
  name: string;
  id: string;
  labelValue: string;
  error: string;
};

export const input = ({ type, name, id, labelValue, error }: InputType) => {
  return Handlebars.compile(tpl)({ type, name, id, labelValue, error });
};
