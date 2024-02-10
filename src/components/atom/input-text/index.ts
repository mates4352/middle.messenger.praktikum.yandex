import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("InputText", tpl);

type InputTextType = {
  className?: string;
  id: string;
  value: string;
  type: string;
  name: string;
};

export const InputText = ({
  className,
  id,
  value,
  type,
  name,
}: InputTextType) => {
  return Handlebars.compile(tpl)({
    className,
    id,
    value,
    type,
    name,
  });
};
