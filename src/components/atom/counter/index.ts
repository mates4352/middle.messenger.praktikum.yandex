import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("Counter", tpl);

type CounterType = {
  className?: string;
  counter: string;
};

export const Counter = ({ className, counter }: CounterType) => {
  return Handlebars.compile(tpl)({ className, counter });
};
