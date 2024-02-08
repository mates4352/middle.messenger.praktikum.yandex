import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("IconAddFile", tpl);

type IconArrowType = {
  className?: string;
};

export const IconAddFile = ({ className }: IconArrowType) => {
  return Handlebars.compile(tpl)({ className });
};
