import {createStackNavigator} from 'react-navigation-stack';
import LoginSignUpMainComponent from '../Components/Auth/LoginSignUp/loginSignUpMainComponent';
import RegisterPasswordMainComponent from '../Components/Auth/RegisterPassword/registerPasswordMainComponent';
import LoginPasswordMainComponent from '../Components/Auth/LoginPassword/loginPasswordMainComponent';
import RegisterFnameLnameDetailMainComponent from '../Components/Auth/FirstNameLastNameDetail/registerFnameLnameDetailMainComponent';
import LoginOTPMainComponent from '../Components/Auth/LoginOTP/loginOTPMainComponent';

const LoginSignUpStackNavigator = createStackNavigator(
  {
    LoginSignUpComponent: LoginSignUpMainComponent,
    RegisterPasswordComponent: RegisterPasswordMainComponent,
    LoginPasswordComponent: LoginPasswordMainComponent,
    RegisterFnameLnameDetailComponent: RegisterFnameLnameDetailMainComponent,
    LoginOTPComponent: LoginOTPMainComponent,
  },
  {
    headerMode: 'none',
  },
);

export default LoginSignUpStackNavigator;
