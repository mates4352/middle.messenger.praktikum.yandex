import {SignIn} from "../../sign-in/ui/Sign-in";
import {CreateAccount} from "../../create-account/ui/Create-account";
import {sendLocation, useLocation} from "../../../shared/lib/utils/use-location";
import {AuthLink} from "../lib/config/auth-link";


type AuthType = {

};

export const Auth = ({}: AuthType) => {
  const [location] = useLocation()
  if(location === "/") {
    sendLocation(AuthLink.SIGH_IN)
  }

  const getPage = (location: string) => {
    switch (location) {
      case AuthLink.SIGH_IN:
        return SignIn({})
      case AuthLink.CREATE_ACCOUNT:
        return CreateAccount({})
      default:
        return ""
    }
  }

  return `
    ${getPage(location)}
  `
};