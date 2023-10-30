import s from "./Sign-in.module.scss";
import {FormSignIn} from "../../../widgets/form-sign-in/ui/Form-sign-in";
import {sendLocation} from "../../../shared/lib/utils/use-location";
import {Auth} from "../../auth/ui/Auth";
import {AuthLink} from "../../auth/lib/config/auth-link";

type SignInType = {

};

export const SignIn = ({}: SignInType) => {
  const onRedirectToCreateAccount = () => {
    sendLocation(AuthLink.CREATE_ACCOUNT)
  }

  return `
    <section class="${s.SignIn}">
        <div class="${s.body}">
            ${FormSignIn({
                id: "Form-sign-in", 
                onSubmit: (values) => {console.log(values)},
                onClickButtonToSignIn: onRedirectToCreateAccount
            })}
        </div>
    </section>
  `
};