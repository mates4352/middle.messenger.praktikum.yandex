import s from "./Form-create-account.module.scss";

import {runOnLoad} from "../../../shared/lib/utils/run-on-load";
import {getElement} from "../../../shared/lib/utils/get-element";
import {Input} from "../../../shared/ui/input/Input";
import {Button} from "../../../shared/ui/button/Button";

export type FormSubmitCreateAccountType = {
  email: string
  login: string
  first_name: string
  second_name: string
  phone: string
  password_confirm: string
}

type FormCreateAccountType = {
  class?: string
  id: string;
  onSubmit: (values: FormSubmitCreateAccountType) => void
  onClickButtonToCreateAccount: () => void
};

export const FormCreateAccount = (props: FormCreateAccountType) => {
  const className = props.class ? `${props.class}  ${s.formCreateAccount}` : s.formCreateAccount
  let errorInputPasswordConfirm = '';

  runOnLoad(() => {
    const formSignIn: HTMLFormElement = getElement<HTMLFormElement>(`#${props.id}`)
    const formButtonToCreateAccount = getElement("#form-button-create-account");

    formButtonToCreateAccount.addEventListener("click", () => {
      props.onClickButtonToCreateAccount()
    })

    if(formSignIn) {
      formSignIn.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = new FormData(formSignIn);
        const password = formData.get("password");
        const password_confirm = formData.get("password_confirm");
        errorInputPasswordConfirm = password !== password_confirm ? "Пароли не совпадают" : "";

        const objSubmit = {
          email: formData.get("email"),
          login: formData.get("login"),
          first_name: formData.get("first_name"),
          second_name: formData.get("second_name"),
          phone: formData.get("phone"),
          password,
          password_confirm,
        } as FormSubmitCreateAccountType

        if(password === password_confirm) {
          props.onSubmit(objSubmit)
          formSignIn.reset();
        }
      })
    }
  })

  return `
    <form class="${className}" id="${props.id}">
        <h2 class="${s.title}">Регистрация</h2>
        
        <div class="${s.wrap}">
          ${Input({id: "email", name: "email", type: "email", labelValue: "Почта"})}
          ${Input({id: "login", name: "login", type: "text", labelValue: "Логин"})}
          ${Input({id: "first_name", name: "first_name", type: "text", labelValue: "Имя"})}
          ${Input({id: "second_name", name: "second_name", type: "text", labelValue: "Фамилия"})}
          ${Input({id: "phone", name: "phone", type: "phone", labelValue: "Телефон"})}
          ${Input({id: "password", name: "password", type: "password", labelValue: "Пароль"})}
          ${Input({id: "password_confirm", name: "password_confirm", type: "password", labelValue: "Пароль (ещё раз)", error: errorInputPasswordConfirm})}
        </div>
        
        
        <ul class="${s.list}">
            <li>
                ${Button({text:"Зарегистрироваться", type:"submit"})}
            </li>
            
            <li>
                <button class="${s.ButtonToSignIn}" id="form-button-create-account" type="button">Войти</button>
            </li>
        </ul>
    </form>
  `
};