import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("IconClose", tpl);

type IconArrowType = {
  className?: string;
};

export const IconClose = ({ className }: IconArrowType) => {
  return Handlebars.compile(tpl)({ className });
};
