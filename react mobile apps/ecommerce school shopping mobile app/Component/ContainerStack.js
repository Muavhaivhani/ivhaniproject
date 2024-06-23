
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import Register from './Screens/Register';
import { View } from 'react-native-web';
import School from './Screens/School';
import LOGINSCREEN from './Screens/LOGINSCREEN';
import DashBoard from './Screens/DashBoard';
import Catalog from './Screens/Catalog';
import DETAIL from './Screens/DETAIL.js';
import CART from './Screens/CART.js';
import PLACEORDER from './Screens/PLACEORDER.js';
import Status from './Screens/Status';
import Profile from './Screens/Profile';
import EditProfile from './Screens/EditProfile';
import EditAddress from './Screens/EditAddress';
import Transaction from './Screens/Transaction';
import TrackOrderStatus from './Screens/TrackOrderStatus';
const Stack = createStackNavigator();

export default ContainerStack = () => {


  const stackOptions = {
    headerTitleStyle: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      letterSpacing: 2,
    },
     cardStyle: { backgroundColor: '#ffff', shadowColor: '#ffff' },
     transparentCard: true,
     transitionConfig: () => ({
       containerStyle: {
         backgroundColor: '#ffff',
       },
    }),
  };
    return (
 
        <Stack.Navigator 
          initialRouteName="login"
          screenOptions={{
            headerShown: false,
            headerMode: 'screen',
            contentStyle:{
            
              backgroundColor:'#FFFFFF'
            },bodyStyle: { //Does not work,
              backgroundColor: '#FFFFF',
          },
          containerStyle:{backgroundColor: '#fffff'}
          }}
          
        >
             <Stack.Screen
            name="login"
            component={LOGINSCREEN}
            options={{
              title: 'Awesome app',
        
            }}
          />
           <Stack.Screen
            name="School"
            component={School}
            options={{
              title: 'Awesome app',
        
            }}
          />
          <Stack.Screen
            name="status"
            component={Status}
            options={{
              title: 'Awesome app',
        
            }}
          />
            <Stack.Screen
            name="PlaceOrder"
            component={PLACEORDER}
            options={{
              title: 'Awesome app',
        
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'Awesome app',
        
            }}
          />
          <Stack.Screen
            name="editaddress"
            component={EditAddress}
            options={{
              title: 'Awesome app',
        
            }}
          />
          <Stack.Screen
            name="editprofile"
            component={EditProfile}
            options={{
              title: 'Awesome app',
        
            }}
          />
           <Stack.Screen
            name="detail"
            component={DETAIL}
            options={{
              title: 'Awesome app',
        
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Awesome app',
        
            }}
          />
           <Stack.Screen
            name="DashBoard"
            component={DashBoard}
            options={{
              title: 'Awesome app',
        
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CART}
            options={{
              title: 'Awesome app',
        
            }}
          />
           <Stack.Screen
            name="transaction"
            component={Transaction}
            options={{
              title: 'Awesome app',
        
            }}
          />
          <Stack.Screen
            name="trackorderStatus"
            component={TrackOrderStatus}
            options={{
              title: 'Awesome app',
        
            }}
          />
            <Stack.Screen
            name="Catalog"
            component={Catalog}
            options={{
              title: 'Awesome app',
        
            }}
          />
        
          
        </Stack.Navigator>
      
      );

}