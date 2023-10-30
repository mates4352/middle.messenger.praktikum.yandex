import s from "./Sign-in.module.scss";
import {FormSignIn} from "../../../widgets/form-sign-in/ui/Form-sign-in";

type SignInType = {

};

export const SignIn = ({}: SignInType) => {
  return `
    <section class="${s.SignIn}">
        <div class="${s.body}">
            ${FormSignIn({
                id: "Form-sign-in", 
                onSubmit: (values) => {console.log(values)}
            })}
        </div>
    </section>
  `
};