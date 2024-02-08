import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("IconFile", tpl);

type IconArrowType = {
  className?: string;
};

export const IconFile = ({ className }: IconArrowType) => {
  return Handlebars.compile(tpl)({ className });
};
