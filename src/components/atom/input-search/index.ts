import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("InputSearch", tpl);

type InputSearchType = {
  className?: string;
  id: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
};

export const InputSearch = ({
  className,
  id,
  type,
  name,
  value,
  placeholder,
}: InputSearchType) => {
  return Handlebars.compile(tpl)({
    className,
    id,
    type,
    name,
    value,
    placeholder,
  });
};
