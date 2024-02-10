import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("ProfileDataInput", tpl);

type ProfileDataInputsType = {
  inputs: Array<{ input: any; text: string }>;
};

export const ProfileDataInputs = ({ inputs }: ProfileDataInputsType) => {
  return Handlebars.compile(tpl)({
    inputs,
  });
};
