import s from "./Form-sign-in.module.scss";

import {runOnLoad} from "../../../shared/lib/utils/run-on-load";
import {getElement} from "../../../shared/lib/utils/get-element";
import {Input} from "../../../shared/ui/input/Input";
import {Button} from "../../../shared/ui/button/Button";

export type FormSubmitSignInType = {
  login: string;
  password: string
}

type FormSignInType = {
  class?: string
  id: string;
  onSubmit: (values: FormSubmitSignInType) => void
  onClickButtonToSignIn: () => void
};

export const FormSignIn = (props: FormSignInType) => {
  const className = props.class ? `${props.class}  ${s.formSignIn}` : s.formSignIn

  runOnLoad(() => {
    const formSignIn: HTMLFormElement = getElement<HTMLFormElement>(`#${props.id}`)
    const formButtonToSignIn = getElement("#form-button-to-sign-in");

    formButtonToSignIn.addEventListener("click", () => {
      props.onClickButtonToSignIn()
    })

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
        <h2 class="${s.title}">Вход</h2>
        
        <div class="${s.wrap}">
          ${Input({id:"login", name: "login", type: "text", labelValue: "Логин"})}
          ${Input({id:"password", name: "password", type: "password", labelValue: "Пароль"})}
        </div>
        
        <ul class="${s.list}">
            <li>
                ${Button({text:"Авторизоваться", type:"submit"})}
            </li>
            
            <li>
                <button class="${s.ButtonToSignIn}" id="form-button-to-sign-in" type="button">Нет аккаунта?</button>
            </li>
        </ul>
    </form>
  `
};