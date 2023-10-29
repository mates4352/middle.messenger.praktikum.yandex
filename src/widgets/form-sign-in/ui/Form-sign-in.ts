import s from "./Form-sign-in.module.scss";

import {runOnLoad} from "../../../shared/lib/utils/run-on-load";
import {getElement} from "../../../shared/lib/utils/get-element";
import {Input} from "../../../shared/ui/input/Input";
import {Button} from "../../../shared/ui/button/Button";
import {log} from "util";

export type FormSubmitSignInType = {
  login: string;
  password: string
}

type FormSignInType = {
  class?: string
  id: string;
  onSubmit: (values: FormSubmitSignInType) => void
};

export const FormSignIn = (props: FormSignInType) => {
  const className = props.class ? `${props.class}  ${s.formSignIn}` : s.formSignIn

  runOnLoad(() => {
    const formSignIn: HTMLFormElement = getElement<HTMLFormElement>(`#${props.id}`)

    if(formSignIn) {
      formSignIn.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = new FormData(formSignIn);
        const objSubmit = {
          login: formData.get("login"),
          password: formData.get("password")
        } as FormSubmitSignInType

        props.onSubmit(objSubmit)

        formSignIn.reset();
      })
    }
  })

  return `
    <form class="${className}" id="${props.id}">
        <div class="${s.wrap}">
          ${Input({id:"login", name: "login", type: "text", labelValue: "Логин"})}
          ${Input({id:"password", name: "password", type: "password", labelValue: "Пароль"})}
        </div>
        
        ${Button({text:"Авторизоваться", type:"submit"})}
    </form>
  `
};