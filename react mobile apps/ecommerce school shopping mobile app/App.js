
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';

import ContainerStack from './Component/ContainerStack';

import { NavigationContainer } from '@react-navigation/native';

import { AppapiProvider } from './Component/AppProvider/Approvider';
import { AuthContextProvider } from './Component/AppProvider/context';
import APIBASE from './Component/Module/APICONSTANT';
import { ToastProvider } from 'react-native-toast-notifications';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import TrackOrderStatus from './Component/Screens/TrackOrderStatus';


export default function App(props) {
  const [userToken, setuserToken] = React.useState(null);
  const [isloadings, setisloadings] = React.useState(true);

  const [LOGINCHECK, SETLOGINCHECK] = React.useState(false);
  const initialState = {
    isloadings: true,
    userToken: null
  }
  const userREDUCER = (prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isloadings: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isloadings: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isloadings: true,
          userToken: null,
        };
    }
  }

  
  const [globalState, dispatch] = React.useReducer(userREDUCER, initialState);
  const authenticate = React.useMemo(() => ({
    signIn:() => {
      console.log("The scrren that hass been toucked");
      

   
      dispatch({ type: "DashBoard", token: userToken });


    }, signOut: () => {
      setuserToken(null),
        setisloadings(false)

    }, signUp: () => {
      setuserToken("fdffd"),
        setisloadings(true)

    },
  }));



  return (
  
    <AuthContextProvider.Provider value={authenticate}>

      <AppapiProvider>
   
        <ToastProvider>
        <NavigationContainer>
       
          <ContainerStack />
          
        </NavigationContainer>
        </ToastProvider>
      </AppapiProvider>
    </AuthContextProvider.Provider>
 


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
