import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("IconPlus", tpl);

type IconArrowType = {
  className?: string;
};

export const IconPlus = ({ className }: IconArrowType) => {
  return Handlebars.compile(tpl)({ className });
};
